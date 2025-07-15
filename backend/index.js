import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const { NASA_API_KEY = "DEMO_KEY", PORT = 5000 } = process.env;
const NASA_BASE = "https://api.nasa.gov";

/** Helper to proxy NASA requests */
const nasa = (path, params = {}) =>
  axios
    .get(`${NASA_BASE}${path}`, {
      params: { api_key: NASA_API_KEY, ...params },
    })
    .then((r) => r.data);

// Routes

app.get("/api/epic", async (req, res) => {
  try {
    const data = await nasa("/EPIC/api/natural/images");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "EPIC fetch failed" });
  }
});

app.get("/api/images", async (req, res) => {
  try {
    const { q } = req.query;
    const { data } = await axios.get("https://images-api.nasa.gov/search", {
      params: { q, media_type: "image" },
    });
    res.json(data.collection.items);
  } catch (err) {
    res.status(500).json({ message: "NASA Image Search failed" });
  }
});

app.get("/api/apod", async (req, res) => {
  try {
    const { date, start_date, end_date, count, thumbs } = req.query;

    const params = {
      date,
      start_date,
      end_date,
      count,
      thumbs: thumbs === "true", // convert to boolean
    };

    // Remove undefined params
    Object.keys(params).forEach(
      (key) => params[key] === undefined && delete params[key]
    );

    const data = await nasa("/planetary/apod", params);
    res.json(data);
  } catch (err) {
    console.error("APOD fetch error:", err.response?.data || err.message);
    res.status(500).json({ message: "APOD fetch failed" });
  }
});

app.get("/api/mars-photos", async (req, res) => {
  try {
    const { rover = "curiosity", sol = 1000, camera } = req.query;
    const data = await nasa(`/mars-photos/api/v1/rovers/${rover}/photos`, {
      sol,
      camera,
    });
    res.json(data.photos);
  } catch (err) {
    res.status(500).json({ message: "Mars photos fetch failed" });
  }
});

app.get("/api/neo", async (req, res) => {
  try {
    const data = await nasa("/neo/rest/v1/feed", {
      start_date: req.query.start_date,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "NEO feed fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend ready on http://localhost:${PORT}`);
});
