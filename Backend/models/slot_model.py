def Slot(date, time, ghat, capacity):
    return {
        "date": date,
        "time": time,
        "ghat": ghat,
        "capacity": capacity,
        "booked": 0,
        "status": "Available"
    }
