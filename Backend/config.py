import os


MONGO_URL = os.getenv("MONGO_URL")

PORT= int(os.getenv("PORT",5000))