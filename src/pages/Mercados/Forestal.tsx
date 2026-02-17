import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Forestal = () => {
  return (
    <>
      <title>Industria Forestal</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria forestal"
      />
      <meta name="keywords" content="Industria Forestal" />
      <InfoBanner
        video
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/woodindustry.mp4"
        link=""
        category="MERCADO"
        title="INDUSTRIA FORESTAL"
        alt="Industria Forestal"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Soluciones de embalaje resistentes para la industria de la madera
          </h3>
          <p className="text-justify">
            Cuando gestiona una fábrica en la industria de la madera, necesita
            muchas cosas para que su producción funcione de forma óptima. Su
            cadena de suministro, personal y maquinaria... ¿Pero qué pasa con su
            solución de embalaje?
          </p>
          <p className="text-justify">
            Embalaje resistente con material que se mueva con usted. Eso es lo
            que necesita en la industria de la madera. Y, por supuesto, también
            desea que sus sistemas de embalaje sean rápidos, fiables, rentables
            y fáciles de usar. Lo entendemos. Con nuestras soluciones, tiene la
            garantía de recibir productos embalados y estabilizados de forma
            segura. Desde la fábrica hasta el usuario final.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/mederazuncho.webp"
          className="h-[400px] w-[400px]"
          alt="Zunchos de PET para madera"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/maderazuncho2.webp"
          className="h-[400px] w-[400px]"
          alt="Zunchos de PP para madera"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/maderazuncho3.webp"
          className="h-[400px] w-[400px]"
          alt="Zunchos de acero para madera"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Indispensable en la industria de la madera: la cinta de zuncho
          </h3>
          <p className="text-justify">
            La cinta de zuncho es muy adecuada para el embalaje de madera.
            Mantiene el material en su sitio y evita que se dañe. Distinguimos
            entre diferentes tipos.
          </p>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>El zuncho de PET</strong> tiene una excelente
                elasticidad. Esto garantiza que pueda flejar firmemente paquetes
                y fardos de madera con una pérdida mínima de elasticidad. Según
                la temperatura y la humedad, la madera se expande o se contrae.
                El zuncho de PET se mueve de manera excelente en ese caso.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>El zuncho de PP </strong>es perfecto para trabajos más
                ligeros, como listones y fardos pequeños. Disponible en varios
                tamaños y buena resistencia a la intemperie.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>El zuncho de acero</strong> es extremadamente fuerte y,
                por lo tanto, adecuado para los entornos más duros. El embalaje
                resistente suele ser un desafío en la industria de la madera. Al
                fin y al cabo, la madera puede ser muy pesada. Nuestro zuncho de
                acero sólido como una roca ofrece una solución. Con la menor
                cantidad de material posible, puede embalar de forma resistente.
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
          <Link to="/film-embalaje" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Film de embalaje</p>
            <p className="text-sm text-textGray">Películas de embalaje industrial</p>
          </Link>
          <Link to="/productos" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Ver Productos</p>
            <p className="text-sm text-textGray">Catálogo completo de productos</p>
          </Link>
        </div>
      </section>
      <ContactForm
        titulo="¿Necesitas más información sobre nuestras soluciones de embalaje para la industria de la madera?"
        descripcion="Déjanos tus datos y te contactaremos a la brevedad"
      />
    </>
  );
};
