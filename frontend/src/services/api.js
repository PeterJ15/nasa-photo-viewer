import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
});

export const fetchApod = (date) =>
  api.get("/apod", { params: { date } }).then((r) => r.data);
export const fetchMarsPhotos = (params) =>
  api.get("/mars-photos", { params }).then((r) => r.data);
export const fetchNeoFeed = (start_date) =>
  api.get("/neo", { params: { start_date } }).then((r) => r.data);
export const fetchEpic = () => api.get("/epic").then((r) => r.data);
