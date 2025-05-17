## SE3355 – News Portal (20070006012 - Uğur Tütüncüoğlu)
This repository contains both the frontend and backend for the SE3355 assignment.
The frontend is built with React and Redux, while the backend uses Node.js, Express, and SQLite.



The site is deployed using GitHub Pages and can be accessed here:
## 🔗 https://ugurtutuncuoglu.github.io/se3355-assignment/

The backend API is hosted separately on Render.com 



<pre> ## 📁 Project Structure ``` se3355-assignment/ ├── Frontend/ # React app (GitHub Pages) │ ├── public/ # Public assets │ ├── redux/ # Redux setup (visited page history) │ ├── src/ # Main React source code │ │ ├── components/ # Navbar, Slider, Weather, etc. │ │ ├── App.jsx # Main App component │ │ └── main.jsx # Entry point │ ├── index.html │ ├── package.json │ ├── vite.config.js │ └── .gitignore ├── Backend/ # Express server (Render.com) │ ├── app.js # Entry point for the backend │ ├── db.db # SQLite database file │ ├── package.json │ ├── package-lock.json │ └── .gitignore └── README.md ``` </pre>

## 🧱 Build for Production (Frontend)
cd Frontend | npm install | npm run build



## 🚀 Deployment
Frontend (GitHub Pages)
Build the app:
npm run build

Deploy using gh-pages:
npm run deploy


## 🛠️ Tech Stack
# Frontend:
React (Vite)
Redux
Bootstrap

# Backend:
Node.js
Express.js
SQLite

# Hosting:
Frontend: GitHub Pages

Backend: Render.com

⚠️ Notes on Free Hosting (Render)
🔄 Auto-Sleep & Cold Starts
Render’s free tier sleeps inactive services after 15 minutes. First-time access may take several minutes (or return a 502 Bad Gateway) — just refresh and wait for it to wake up.


