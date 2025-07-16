# 🚀 NASA Explorer

Explore the universe with interactive visuals powered by NASA's public APIs — from daily astronomy pictures and Mars rover images to asteroid tracking and Earth imagery.

## 🌌 Features

- 🖼 **Astronomy Picture of the Day (APOD)** — with date selection
- 🔭 **Mars Rover Photos** — filter by rover, sol, and camera
- ☄️ **NEO Tracker** — bar chart of near-earth objects per day
- 🌍 **EPIC Viewer** — dynamic Earth imagery from NASA's DSCOVR satellite
- 🧠 **NASA Image Search (API-ready)** — endpoint implemented
- 📱 **Responsive UI** — fully mobile-friendly
- ⚙️ **Robust backend** — Express-based API proxy with error handling
- 📊 **Visualizations** — powered by Chart.js and custom components

## 🧰 Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Chart.js, React Router
- **Backend**: Node.js, Express, Axios, dotenv
- **Deployment**: Vercel (frontend) + Render (backend)

---

## 🛠 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/PeterJ15/nasa-photo-viewer.git
cd nasa-explorer
```

### 2. Set Up Backend

```bash
cd backend
npm install
echo "NASA_API_KEY=your_key\nPORT=5000" > .env
npm run dev
```

### 3. Set Up Frontend

```bash
cd ../frontend
npm install
echo "VITE_API_BASE=http://localhost:5000" > .env
npm run dev
```

---

## 🌍 Live Demo

- **Frontend**: [https://nasa-photo-viewer-hwrwa8sh7-peters-projects-35632e92.vercel.app/](https://nasa-photo-viewer-hwrwa8sh7-peters-projects-35632e92.vercel.app/)
- **Backend**: [https://nasa-photo-viewer.onrender.com/api](https://nasa-photo-viewer.onrender.com/api)

---

## 📁 Project Structure

```
nasa-explorer/
├── backend/         # Node.js + Express server
│   └── index.js     # API routes
├── frontend/        # React frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
└── README.md
```

---

## 🧠 Acknowledgments

Huge thanks to [NASA Open APIs](https://api.nasa.gov) for providing open access to scientific data.

---
