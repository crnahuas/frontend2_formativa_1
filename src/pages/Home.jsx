import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

const departments = [
  {
    name: "Frutas y verduras",
    description: "Color para tu plato, de lunes a domingo.",
    image: "/images/verduras.jpg",
    alt: "Tomates, zanahorias, repollo y otras verduras",
  },
  {
    name: "Panadería",
    description: "Para el desayuno. O para compartir a la once.",
    image: "/images/panaderia.jpg",
    alt: "Pan de masa madre cortado sobre una tabla",
  },
  {
    name: "Tu despensa",
    description: "Los básicos que siempre hacen falta en casa.",
    image: "/images/despensa.jpg",
    alt: "Pasillo de supermercado con productos para la despensa",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <img
          className="hero-image"
          src="/images/portada-abasto.jpg"
          alt="Bolsa de compras con pan y verduras frescas"
          width="1984"
          height="793"
        />
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 id="home-title">
              Dale color
              <br />
              <span>a tu mesa.</span>
            </h1>
            <p>
              Frutas, pan y básicos para tu casa. Lo de la semana y eso que se
              te olvidó ayer.
            </p>
            <Link className="button outline" to="/nuestras-tiendas">
              Conoce nuestras tiendas <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="departments page-container"
        aria-labelledby="departments-title"
      >
        <div className="section-heading">
          <h2 id="departments-title">Lo que no puede faltar.</h2>
          <p>Una vuelta por nuestras secciones.</p>
        </div>
        <div className="department-grid">
          {departments.map(({ name, description, image, alt }) => (
            <article className="department" key={name}>
              <div className="department-image">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  width="1000"
                  height="750"
                />
              </div>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="visit-section page-container"
        aria-labelledby="visit-title"
      >
        <div className="visit-image">
          <img
            src="/images/tienda.jpg"
            alt="Sección de verduras de un supermercado"
            loading="lazy"
            width="1400"
            height="1050"
          />
        </div>
        <div className="visit-content">
          <h2 id="visit-title">
            La compra de siempre.
            <br />
            Cerca de ti.
          </h2>
          <p>
            Encuentra Abasto en Santiago Centro, Providencia y Ñuñoa. Revisa la
            dirección y el horario de tu local antes de salir.
          </p>
          <Link className="button primary" to="/nuestras-tiendas">
            Encuentra tu tienda <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
      <div className="help-strip page-container">
        <div>
          <h2>¿Alguna duda antes de venir?</h2>
          <p>Horarios, locales y formas de contactarnos.</p>
        </div>
        <Link className="text-button" to="/preguntas-frecuentes">
          Preguntas frecuentes <Icon name="arrow" size={18} />
        </Link>
      </div>
    </>
  );
}
