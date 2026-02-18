from bson import ObjectId
from datetime import datetime
import uuid

def Booking(user, slot_id, people):
    return {
        "user": {
            "fullName": user["fullName"],
            "phone": user["phone"],
            "email": user.get("email"),
            "aadhaarNumber": user["aadhaarNumber"]
        },
        "slot": ObjectId(slot_id),
        "bookingDetails": {
            "bookingId": str(uuid.uuid4()),
            "numberOfPeople": people,
            "status": "Booked",
            "createdAt": datetime.utcnow()
        }
    }
