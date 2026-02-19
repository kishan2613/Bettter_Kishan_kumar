import os


MONGO_URL = os.getenv("MONGO_URI")

PORT= int(os.getenv("PORT",5000))