import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-brand">
            <Link
              className="wordmark"
              to="/"
              aria-label="Abasto, volver al inicio"
            >
              abasto<span>.</span>
            </Link>
            <p>Supermercado Abasto</p>
            <nav aria-label="Información del supermercado">
              <Link to="/nuestras-tiendas">Conoce nuestras tiendas</Link>
              <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            </nav>
          </div>
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact">Hablemos</h2>
            <address>
              <a href="mailto:hola@abasto.cl">hola@abasto.cl</a>
              <span>+56 2 1234 8765</span>
            </address>
            <p>Consultas sobre productos y atención en tienda.</p>
          </section>
          <section aria-labelledby="footer-address">
            <h2 id="footer-address">Casa matriz</h2>
            <address>
              Av. Libertador Bernardo O’Higgins 1450
              <br />
              Santiago, Región Metropolitana
            </address>
            <Link to="/nuestras-tiendas">Ver todos los locales →</Link>
          </section>
          <section aria-labelledby="footer-hours">
            <h2 id="footer-hours">Horarios</h2>
            <dl className="footer-hours">
              <div>
                <dt>Lunes a sábado</dt>
                <dd>08:30 a 20:30</dd>
              </div>
              <div>
                <dt>Domingos</dt>
                <dd>09:00 a 15:00</dd>
              </div>
            </dl>
            <p>Los horarios pueden cambiar en festivos.</p>
          </section>
        </div>
        <div className="footer-bottom">
          <p>Desarrollo Frontend II · PFY2202</p>
        </div>
      </div>
    </footer>
  );
}
