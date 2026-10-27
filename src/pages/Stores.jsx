import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import PageBanner from "../components/PageBanner.jsx";

const stores = [
  {
    number: "01",
    name: "Santiago Centro",
    type: "Casa matriz",
    address: "Av. Libertador Bernardo O’Higgins 1450",
    commune: "Santiago",
    hours: "Lunes a sábado · 08:30 a 20:30",
    sunday: "Domingos · 09:00 a 15:00",
    services: "Sala de ventas · Atención al cliente · Retiro de pedidos",
  },
  {
    number: "02",
    name: "Providencia",
    type: "Sucursal",
    address: "Av. Providencia 2150",
    commune: "Providencia",
    hours: "Lunes a sábado · 09:00 a 21:00",
    sunday: "Domingos · 09:00 a 16:00",
    services: "Sala de ventas · Atención al cliente",
  },
  {
    number: "03",
    name: "Ñuñoa",
    type: "Sucursal",
    address: "Av. Irarrázaval 3200",
    commune: "Ñuñoa",
    hours: "Lunes a sábado · 08:30 a 20:30",
    sunday: "Domingos · 09:00 a 15:00",
    services: "Sala de ventas · Atención al cliente · Retiro de pedidos",
  },
];
export default function Stores() {
  return (
    <>
      <PageBanner
        title="Nuestras tiendas"
        description="Encuentra tu local. Nosotros ponemos el resto."
        image="/images/tienda.jpg"
        alt="Verduras ordenadas en una góndola"
      />
      <div className="page-container stores-content">
        <div className="store-list">
          {stores.map((store) => (
            <article className="store-row" key={store.number}>
              <div className="store-name">
                <h2>{store.name}</h2>
                <p>
                  {store.address}
                  <br />
                  {store.commune}, Región Metropolitana
                </p>
              </div>
              <div className="store-hours">
                <h3>Horario de atención</h3>
                <p>
                  {store.hours}
                  <br />
                  {store.sunday}
                </p>
                <span className="field-hint">
                  Festivos: horario sujeto a confirmación.
                </span>
              </div>
              <div className="store-services">
                <h3>Servicios</h3>
                <p>{store.services}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="help-strip">
          <div>
            <h2>Antes de venir</h2>
            <p>Revisa las preguntas sobre los locales y sus horarios.</p>
          </div>
          <Link className="text-button" to="/preguntas-frecuentes">
            Preguntas frecuentes <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
