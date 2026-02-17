import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Construccion = () => {
  return (
    <>
      <title>Industria de la Construcción</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria de la construcción"
      />
      <meta name="keywords" content="Industria de la construcción" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/ricardo-gomez-angel-7bzbyafVTYg-unsplash.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA DE LA CONSTRUCCIÓN"
        alt="Industria de la Construcción"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Construcción:
          </h3>
          <p className="text-justify">
            En la industria de la construcción, la resistencia y seguridad en el
            embalaje son clave para garantizar que los materiales lleguen en
            perfecto estado, En FROMM, ofrecemos soluciones de flejado con
            zunchos de PET y acero diseñados para soportar las condiciones más
            exigentes del sector.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/construccion1.jpg"
          className="h-[400px] w-[400px]"
          alt="Zunchos FROMM para embalaje de perfiles metálicos en construcción"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/construccion2.jpg"
          className="h-[400px] w-[400px]"
          alt="Flejado de rollos de alambre con zunchos de acero FROMM"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/construccion3.jpg"
          className="h-[400px] w-[400px]"
          alt="Solución de zunchos para asegurar rollos de acero en construcción"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            PET - La Alternativa al zuncho de acero, Inteligente y Sostenible
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Alta resistencia a la tensión y absorción de impactos, ideal
                para asegurar ladrillos, bloques de hormigón, madera y más.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                No se oxida ni daña los materiales, evitando costos adicionales
                por deterioro.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Alternativa ecológica y liviana frente al acero, reduciendo el
                peso sin comprometer la seguridad.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Compatible con herramientas y sistemas de flejado automáticos y
                manuales.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Zuncho de Acero: Máxima Seguridad para Cargas Pesadas
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Ideal para aplicaciones que requieren máxima resistencia, como
                el transporte de vigas, tuberías y estructuras metálicas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Alta resistencia a la tracción y estabilidad ante condiciones
                extremas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Recomendado para asegurar cargas expuestas a temperaturas
                elevadas o almacenamiento prolongado.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Por qué elegir FROMM?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Calidad certificada y tecnología de punta en soluciones de
                embalaje.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                No se oxida ni daña los materiales, evitando costos adicionales
                por deterioro.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Amplia gama de zunchos y herramientas para garantizar la mejor
                aplicación.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                Asesoría especializada para seleccionar el tipo de zuncho ideal
                según cada necesidad.
              </p>
            </li>
          </ul>
          <p className="text-justify">
            Optimiza la seguridad y eficiencia en tus proyectos de construcción
            con nuestros zunchos de PET y acero. ¡Contáctanos y encuentra la
            solución perfecta para tu industria!
          </p>
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
        titulo="¿Necesitas más información sobre nuestras soluciones de embalaje para la industria de la construcción?"
        descripcion="Envianos un mensaje y nos pondremos en contacto contigo a la brevedad."
      />
    </>
  );
};
