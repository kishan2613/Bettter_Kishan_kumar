from flask import Blueprint, request, jsonify, current_app
from bson import ObjectId
from models.booking_model import Booking
from bson.errors import InvalidId


slots_bp = Blueprint("slots", __name__)

@slots_bp.route("/", methods=["GET"])
def get_slots():
    print("GET /api/slots HIT")
    mongo = current_app.mongo

    slots = mongo.db.slots.find()
    result = []

    for slot in slots:
        slot["_id"] = str(slot["_id"])

        if "date" in slot and slot["date"]:
            slot["date"] = slot["date"].isoformat()

        result.append(slot)

    return jsonify(result), 200


@slots_bp.route("/book", methods=["POST"])
def book_slot():
    try:
        mongo = current_app.mongo
        data = request.json

        user = data.get("user")
        slot_id = data.get("slot")
        booking_details = data.get("bookingDetails")

        if not user or not slot_id or not booking_details:
            return jsonify({"message": "Invalid booking data"}), 400

        people = int(booking_details.get("numberOfPeople", 0))

        try:
            slot_obj_id = ObjectId(slot_id)
        except InvalidId:
            return jsonify({"message": "Invalid slot ID"}), 400

        slot = mongo.db.slots.find_one({"_id": slot_obj_id})
        if not slot:
            return jsonify({"message": "Slot not found"}), 404

        booked = slot.get("booked", 0)
        capacity = slot.get("capacity", 0)

        if booked + people > capacity:
            return jsonify({
                "message": "Slot capacity exceeded",
                "availableSeats": capacity - booked
            }), 400

        # 1️⃣ Update slot
        new_booked = booked + people
        mongo.db.slots.update_one(
            {"_id": slot_obj_id},
            {"$set": {
                "booked": new_booked,
                "status": "Full" if new_booked >= capacity else "Available"
            }}
        )

        # 2️⃣ Create booking (USING MODEL ✅)
        booking = Booking(user, slot_id, people)
        result = mongo.db.bookings.insert_one(booking)

        return jsonify({
            "message": "Booking successful",
            "bookingId": str(result.inserted_id),
            "slotId": slot_id,
            "people": people
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


from models.slot_model import Slot
from datetime import datetime

@slots_bp.route("/create", methods=["POST"])
def create_slot():
    try:
        mongo = current_app.mongo
        print(current_app.mongo)
        data = request.json

        date = data.get("date")
        time = data.get("time")
        ghat = data.get("ghat")
        capacity = data.get("capacity")

        if not date or not time or not ghat or not capacity:
            return jsonify({"message": "Missing required fields"}), 400

        capacity = int(capacity)
        if capacity <= 0:
            return jsonify({"message": "Capacity must be greater than 0"}), 400

        # Convert date string → datetime
        date_obj = datetime.fromisoformat(date)

        # 🔥 USING SLOT MODEL HERE
        slot = Slot(
            date=date_obj,
            time=time,
            ghat=ghat,
            capacity=capacity
        )

        result = mongo.db.slots.insert_one(slot)

        return jsonify({
            "message": "Slot created successfully",
            "slotId": str(result.inserted_id)
        }), 201

    except ValueError:
        return jsonify({"message": "Invalid data format"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500
