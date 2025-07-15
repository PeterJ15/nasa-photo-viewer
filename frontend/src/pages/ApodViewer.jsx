import { useEffect, useState } from "react";
import { fetchApod } from "../services/api";
import Loader from "../components/Loader";
import DateInput from "../components/DateInput";

export default function ApodViewer() {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchApod(date)
      .then(setApod)
      .catch(() => setError("Could not fetch APOD. Try again later."))
      .finally(() => setLoading(false));
  }, [date]);

  return (
    <article className="space-y-4 max-w-3xl w-full mx-auto px-4">
      <h2 className="text-3xl font-semibold">Astronomy Picture of the Day</h2>
      <DateInput value={date} onChange={setDate} />
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div>
          <h3 className="text-2xl font-semibold">{apod.title}</h3>
          {apod.media_type === "image" ? (
            <img
              src={apod.url}
              alt={apod.title}
              style={{ width: "280px" }}
              className="h-auto object-cover mx-auto rounded"
            />
          ) : (
            <iframe
              title="apod-video"
              src={apod.url}
              className="w-full aspect-video rounded-lg shadow-md"
            />
          )}
          <p className="text-slate-300 mt-2">{apod.explanation}</p>
        </div>
      )}
    </article>
  );
}
