🕉️ Mahakumbh Slot Booking & E-Ticket System

This project is a full-stack web application built to manage time-slot based entry for large-scale religious events like Mahakumbh.
The goal is simple: reduce overcrowding, make entry smoother, and give pilgrims a reliable booking experience.

Users can book an available slot and instantly receive a PDF ticket that can be saved or printed.

🔗 Live Project

Frontend: https://bettter-kishan-kumar.vercel.app/

Backend: https://bettter-kishan-kumar.onrender.com/

React Frontend  →  Flask API  →  MongoDB Atlas
        │                 │
        └── PDF Ticket Generation ──┘
The frontend handles the user experience, the backend manages bookings and validation, and MongoDB stores slot and booking data.

🛠️ Tech Stack
Frontend

React.js

Tailwind CSS

html2canvas + jsPDF (for PDF ticket generation)

Deployed on Vercel

Backend

Python Flask (REST API)

Deployed on Render

Database

MongoDB Atlas (cloud-hosted NoSQL database)

🔑 Key Technical Decisions
Why React.js?

React made it easy to build a smooth booking flow with reusable components and responsive UI updates when slot availability changes.

Why Flask for the backend?

Flask is lightweight, easy to reason about, and fast to develop with.
It also keeps the backend simple while leaving room for future AI-based features using Python’s ecosystem.

Why MongoDB Atlas?

Slot and booking data can evolve over time, and MongoDB’s flexible schema fits that need well.
Using Atlas also ensures reliability and scalability without managing infrastructure manually.

Why PDF tickets?

PDF tickets are:

Easy to download

Printable

Usable even without internet after booking

This makes the system more practical for real-world usage.

Handling Render’s Sleep Limitation

Render’s free tier automatically puts the backend to sleep after inactivity.
To avoid disruptions during active booking periods, a cron job pings a lightweight endpoint every 10 minutes, keeping the API warm.

This was a conscious reliability decision to maintain uptime without increasing deployment costs.

🔄 Booking Flow

User selects a date, time slot, and number of people

Backend checks real-time availability

Slot is reserved and booking is stored in MongoDB

A PDF ticket is generated and shown to the user

🧪 Running the Project Locally

Backend 

cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

Frontend
cd frontend
npm install
npm run dev

## ⏱️ Backend Uptime Strategy (Cron Job)

Render’s free tier puts backend services to sleep after inactivity.

To avoid downtime during active booking periods:
- A lightweight `/health` endpoint is exposed in the Flask API
- An external cron service pings this endpoint every 10 minutes
- This keeps the backend warm and avoids cold-start delays

The cron job is intentionally kept outside the codebase to:
- Keep backend logic clean
- Avoid unnecessary background processes
- Match real-world deployment practices

