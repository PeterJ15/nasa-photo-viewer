import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

export default function EPICViewer() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("/api/epic")
      .then((res) => setImages(res.data))
      .catch(() => setError("Could not fetch EPIC images."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-400 text-center">{error}</p>;
  if (images.length === 0)
    return (
      <p className="text-slate-400 text-center">No EPIC images available.</p>
    );

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {images.slice(0, 30).map((img, i) => {
        const [date] = img.date.split(" ");
        const [year, month, day] = date.split("-");
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`;
        return (
          <figure
            key={i}
            style={{ margin: "0 20px" }}
            className="bg-slate-800 rounded-lg overflow-hidden shadow"
          >
            <img
              src={imageUrl}
              alt={img.caption || img.image}
              style={{ width: "280px" }}
              className="h-auto object-cover mx-auto rounded"
            />

            <figcaption className="p-2 text-sm text-slate-400">
              {img.caption || img.image} – {img.date}
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
}
