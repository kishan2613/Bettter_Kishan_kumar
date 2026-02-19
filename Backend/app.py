from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from config import MONGO_URL, PORT

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = MONGO_URL

print("DEBUG MONGO_URI FROM CONFIG =", app.config.get("MONGO_URI"))


mongo = PyMongo()
mongo.init_app(app)

app.mongo = mongo

from routes.slots import slots_bp
from routes.test import test_bp

app.register_blueprint(test_bp, url_prefix="/api")
app.register_blueprint(slots_bp, url_prefix="/api/slots")

@app.route("/test-db")
def test_db():
    return str(app.mongo.db.list_collection_names())

@app.route("/")
def home():
    return "Flask backend running 🚀"

@app.route("/health")
def health():
    return {"status": "ok"}, 200


if __name__ == "__main__":
    app.run(debug=True)
