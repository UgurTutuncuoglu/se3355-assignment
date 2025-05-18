## SE3355 – News Portal (20070006012 - Uğur Tütüncüoğlu)
This repository contains both the frontend and backend for the SE3355 assignment.
The frontend is built with React (Vite) and Redux, while the backend uses Node.js, Express, and SQLite.



## 🔗 Live Deployments
Frontend: https://ugurtutuncuoglu.github.io/se3355-assignment/

Backend (API - Render): Hosted on Render.com (free tier)


## 📁 Project Structure
```
Frontend/ # React app (GitHub Pages)
│ ├── public/ # Public assets
│ ├── redux/ # Redux setup (visited page history)
│ ├── src/ # Main React source code
│ │ ├── components/ # Navbar, Slider, Weather, etc.
│ │ ├── App.jsx # Main App component
│ │ └── main.jsx # Entry point
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── .gitignore

Backend/ # Express server (Render.com)
│ ├── app.js # Entry point for the backend
│ ├── db.db # SQLite database file
│ ├── package.json
│ ├── package-lock.json
│ └── .gitignore

└── README.md
```

## 🧱 Build for Production (Frontend)
cd Frontend | npm install | npm run build



## 🚀 Deployment
Frontend (GitHub Pages)
Build the app:
npm run build

Deploy using gh-pages:
npm run deploy


## 🛠️ Tech Stack
🔹 Frontend
React (with Vite)

Redux (visited pages tracking)

Bootstrap (CSS)

Responsive Design

🔹 Backend
Node.js

Express.js

SQLite (Local database, not in-memory)

🔹 Hosting
Frontend: GitHub Pages

Backend: Render.com (free tier)

# Hosting:
Frontend: GitHub Pages

Backend: Render.com

⚠️ Notes on Free Hosting (Render)
🔄 Auto-Sleep & Cold Starts
Render’s free tier sleeps inactive services after 15 minutes. First-time access may take several minutes (or return a 502 Bad Gateway) — just refresh and wait for it to wake up.


