import { useEffect, useState } from "react";
import { fetchNeoFeed } from "../services/api";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Loader from "../components/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function NeoTracker() {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetchNeoFeed(today)
      .then(setFeed)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  const isoDates = Object.keys(feed.near_earth_objects); // Step 1: sort by ISO date

  const formattedDates = isoDates.map((d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    })
  );

  const counts = isoDates.map((d) => feed.near_earth_objects[d].length); // Match counts with sorted ISO dates

  const data = {
    labels: formattedDates,
    datasets: [
      {
        label: "NEOs per day",
        data: counts,
        backgroundColor: "#facc15", // bright yellow for dark theme
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#f1f5f9" },
      },
      title: {
        display: true,
        text: "Near-Earth Objects per Day",
        color: "#f1f5f9",
        font: { size: 18 },
      },
    },
    scales: {
      x: {
        ticks: { color: "#f1f5f9" },
        grid: { color: "#334155" },
      },
      y: {
        ticks: { color: "#f1f5f9" },
        grid: { color: "#334155" },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <h2 className="text-2xl font-semibold text-white">
        Near‑Earth Objects (last week)
      </h2>
      <div
        className="bg-slate-800 p-4 rounded-lg shadow"
        style={{ height: "400px" }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
