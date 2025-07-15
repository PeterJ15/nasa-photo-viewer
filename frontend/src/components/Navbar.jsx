import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/apod", label: "APOD" },
  { to: "/mars", label: "Mars Rover" },
  { to: "/neo", label: "NEO Tracker" },
  { to: "/epic", label: "EPIC" },
];

export default function Navbar() {
  return (
    <header className="bg-slate-800 shadow">
      <nav className="max-w-6xl mx-auto p-4">
        <Link to="/" className="block text-2xl font-bold text-amber-400 mb-4">
          🚀 NASA Explorer
        </Link>
        <ul className="flex flex-col gap-2 pl-2">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-amber-300" : "text-slate-300"
                  } hover:text-white block`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
