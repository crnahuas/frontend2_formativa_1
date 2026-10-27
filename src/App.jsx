import { useEffect, useRef } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Icon from "./components/Icon.jsx";
import Home from "./pages/Home.jsx";
import Stores from "./pages/Stores.jsx";
import Faq from "./pages/Faq.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nuestras-tiendas", label: "Nuestras tiendas" },
  { to: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export default function App() {
  const location = useLocation();
  const firstRoute = useRef(true);
  const main = useRef(null);

  useEffect(() => {
    const titles = {
      "/": "Inicio",
      "/nuestras-tiendas": "Nuestras tiendas",
      "/preguntas-frecuentes": "Preguntas frecuentes",
    };
    document.title = `${titles[location.pathname] || "Página no encontrada"} · Abasto`;
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    window.scrollTo(0, 0);
    main.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" to="/" aria-label="Abasto, ir al inicio">
            abasto<span>.</span>
          </Link>
          <nav className="top-nav" aria-label="Navegación principal">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main ref={main} id="contenido" className="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuestras-tiendas" element={<Stores />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>Por aquí no era.</h1>
                <p>
                  No encontramos esa página. Puedes volver al inicio desde aquí.
                </p>
                <Link className="button primary" to="/">
                  Volver al inicio <Icon name="arrow" />
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
