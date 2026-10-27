import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import PageBanner from "../components/PageBanner.jsx";

const questions = [
  {
    q: "¿Dónde están las tiendas?",
    a: "Tenemos locales en Santiago Centro, Providencia y Ñuñoa. En “Nuestras tiendas” puedes revisar la dirección y los servicios de cada uno.",
  },
  {
    q: "¿Abren los domingos?",
    a: "Sí. El local de Santiago Centro y el de Ñuñoa atienden de 09:00 a 15:00. Providencia abre de 09:00 a 16:00. Revisa el horario del local que quieres visitar en “Nuestras tiendas”.",
  },
  {
    q: "¿Qué pasa con los horarios en festivos?",
    a: "Pueden cambiar. Antes de ir, confirma el horario con atención al cliente; el horario habitual de domingo no necesariamente se aplica a un festivo.",
  },
  {
    q: "¿Puedo comprar desde esta página?",
    a: "Las compras se realizan en nuestras tiendas. Aquí puedes revisar la dirección y el horario de cada local antes de venir.",
  },
  {
    q: "¿Cómo puedo contactarlos?",
    a: "En el pie de cada página encontrarás el correo, el teléfono y la dirección de casa matriz.",
  },
];
export default function Faq() {
  return (
    <>
      <PageBanner
        title="Preguntas frecuentes"
        description="Respuestas para que vengas con todo claro."
        image="/images/panaderia.jpg"
        alt="Pan rebanado sobre una tabla de madera"
      />
      <div className="faq-layout page-container">
        <aside>
          <h2>
            Por si te quedaste
            <br />
            con la duda.
          </h2>
          <p>
            Aquí puedes revisar las dudas sobre los locales y la atención. Si
            buscas una dirección, pasa a nuestras tiendas.
          </p>
          <Link className="text-button" to="/nuestras-tiendas">
            Ver nuestras tiendas <Icon name="arrow" size={17} />
          </Link>
        </aside>
        <div className="faq-list">
          {questions.map(({ q, a }, index) => (
            <details key={q} name="faq" open={index === 0 ? true : undefined}>
              <summary>
                <span>{q}</span>
                <span className="faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
