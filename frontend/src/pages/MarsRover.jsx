import { useEffect, useState } from "react";
import { fetchMarsPhotos } from "../services/api";
import Loader from "../components/Loader";

export default function MarsRover() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarsPhotos({ sol: 1000, rover: "curiosity" })
      .then(setPhotos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {photos.slice(0, 60).map((p) => (
        <figure
          key={p.id}
          style={{ margin: "0 20px" }}
          className="bg-slate-800 rounded-lg overflow-hidden shadow"
        >
          <img
            src={p.img_src}
            alt={`Mars ${p.id}`}
            style={{ width: "280px" }}
            className="h-auto object-cover mx-auto rounded"
          />

          <figcaption className="p-2 text-sm text-slate-400">
            {p.rover.name} – {p.camera.full_name} (Sol {p.sol})
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
