import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const fetchApod = (date) =>
  api.get("/apod", { params: { date } }).then((r) => r.data);
export const fetchMarsPhotos = (params) =>
  api.get("/mars-photos", { params }).then((r) => r.data);
export const fetchNeoFeed = (start_date) =>
  api.get("/neo", { params: { start_date } }).then((r) => r.data);
