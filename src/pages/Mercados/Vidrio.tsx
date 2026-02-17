import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Vidrio = () => {
  return (
    <>
      <title>Industria del Vidrio</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria del vidrio"
      />
      <meta name="keywords" content="Industria del vidrio" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/quino-al-OUQfQRL2GJY-unsplash.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA DEL VIDRIO"
        alt="Industria del vidrio"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Industria de Vidrio.
          </h3>
          <p className="text-justify">
            El vidrio es un material frágil que requiere soluciones de embalaje
            altamente seguras para evitar daños durante el transporte y
            almacenamiento. FROMM ofrece la resistencia necesaria para mantener
            las cargas estables, minimizando riesgos y reduciendo pérdidas por
            roturas.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/vidrio1.jpg"
          className="h-[400px] w-[400px]"
          alt="papel"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/vidrio2.jpeg"
          className="h-[400px] w-[400px]"
          alt="papel"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Dónde se usan nuestros zunchos en la industria del vidrio?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Flejado de paquetes de botellas y frascos de vidrio:
                </strong>{" "}
                Asegura grandes volúmenes de envases de vidrio para distribución
                en la industria alimentaria, farmacéutica y cosmética.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Sujeción de paneles y vidrios planos:</strong> Protege
                vidrios laminados, templados y espejos utilizados en
                construcción y mobiliario.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Agrupación de vidrio reciclado:</strong> Facilita el
                transporte y manipulación de fragmentos de vidrio en plantas de
                reciclaje.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Paletización de ventanas y parabrisas:</strong> Evita el
                movimiento y posibles fracturas en productos automotrices y de
                carpintería.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Aseguramiento de materiales de cristalería industrial:
                </strong>{" "}
                Mantén en perfectas condiciones las piezas utilizadas en
                laboratorios y manufactura de alta precisión.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Ventajas de los zunchos FROMM para la industria del vidrio
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Alta resistencia y estabilidad:</strong> Reduce
                vibraciones y movimientos bruscos durante el traslado.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Protección sin daños:</strong> El zuncho de PET es
                flexible y no deja marcas ni residuos de corrosión en el vidrio.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Opción ecológica y reciclable:</strong> Compatible con
                industrias comprometidas con la sustentabilidad.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Compatibilidad con sistemas automáticos y manuales:
                </strong>{" "}
                Adaptable a líneas de producción de gran escala.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-10 mb-10 md:max-w-[875px] md:m-auto">
        <h3 className="text-textGray text-lg font-bold mb-6 md:text-2xl">
          Soluciones relacionadas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/zunchos-herramientas" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Zunchos y Herramientas</p>
            <p className="text-sm text-textGray">Enzunchadoras y zunchos de alta resistencia</p>
          </Link>
          <Link to="/envolvedora" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Envolvedoras</p>
            <p className="text-sm text-textGray">Máquinas envolvedoras industriales</p>
          </Link>
          <Link to="/productos" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Ver Productos</p>
            <p className="text-sm text-textGray">Catálogo completo de productos</p>
          </Link>
        </div>
      </section>
      <ContactForm
        titulo="Optimiza tu logística con los zunchos FROMM. ¡Contáctanos para asesoría personalizada y cotizaciones!"
        descripcion="Envianos un mensaje y nos pondremos en contacto contigo a la brevedad."
      />
    </>
  );
};
