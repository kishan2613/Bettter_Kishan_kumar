import os
from dotenv import load_dotenv
load_dotenv()


MONGO_URL = os.getenv("MONGO_URI")

PORT= int(os.getenv("PORT",5000))