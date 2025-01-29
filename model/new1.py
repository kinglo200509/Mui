import numpy as np
import cv2
import imutils
import os
import datetime

# Load the gun and face cascade classifiers
gun_cascade = cv2.CascadeClassifier('cascade.xml')
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Open webcam
camera = cv2.VideoCapture(0)

if not camera.isOpened():
    print("Error: Could not open webcam")
    exit()

gun_detected_once = False  # Track if gun has already been detected
min_size = (150, 150)  # Minimum size of detected object (gun)

# Set camera resolution
camera.set(3, 1280)  # Width
camera.set(4, 720)   # Height

while True:
    ret, frame = camera.read()

    if not ret:
        print("Failed to capture image")
        break

    # Resize the frame to make it larger (adjust size)
    frame = imutils.resize(frame, width=800)  # Increase the width of the frame

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect guns
    guns = gun_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=min_size)

    # Detect faces (additional feature)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # Process gun detection
    if len(guns) > 0:
        if not gun_detected_once:
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(f"Gun detected at {timestamp}!")

            # Save image when gun is detected
            cv2.imwrite("gun_detected.jpg", frame)

            # Log detection
            with open("log.txt", "a") as log_file:
                log_file.write(f"Gun detected at {timestamp}\n")

            gun_detected_once = True  # Prevent repeated detection

    else:
        gun_detected_once = False  # Reset when gun is not detected

    # Draw rectangles around detected guns
    for (x, y, w, h) in guns:
        if w > min_size[0] and h > min_size[1]:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
            cv2.putText(frame, "Gun Detected!", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

    # Draw rectangles around detected faces (additional feature)
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        cv2.putText(frame, "Face Detected", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # Display timestamp
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cv2.putText(frame, timestamp, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

    # Show the frame
    cv2.imshow("Security Feed", frame)

    # Close window when 'q' is pressed OR the window is closed manually
    if cv2.waitKey(1) & 0xFF == ord('q') or cv2.getWindowProperty("Security Feed", cv2.WND_PROP_VISIBLE) < 1:
        break

# Release resources
camera.release()
cv2.destroyAllWindows()
