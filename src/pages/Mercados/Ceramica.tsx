import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Ceramica = () => {
  return (
    <>
      <title>Industria de la Cerámica</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria de la cerámica"
      />
      <meta name="keywords" content="Industria de la cerámica" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/mufid-majnun-gH4JYw8RrtA-unsplash.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA CERÁMICA"
        alt="Industria Cerámica"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            La Mejor Solución para el Embalaje en la Industria Cerámica
          </h3>
          <p className="text-justify">
            En la industria cerámica, el transporte y almacenamiento de
            productos frágiles como{" "}
            <strong>azulejos, porcelanatos, tejas y revestimientos</strong>{" "}
            requieren soluciones de embalaje resistentes y seguras. Los{" "}
            <strong>zunchos PET FROMM</strong> garantizan la estabilidad de las
            cargas, evitando daños y optimizando la logística de distribución.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/ceramica1.jpg"
          className="h-[400px] w-[400px]"
          alt="Embalaje de productos cerámicos con zunchos FROMM"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/ceramica2.png"
          className="h-[400px] w-[400px]"
          alt="Solución de flejado para cerámica y porcelanatos FROMM"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Dónde se usan nuestros zunchos en la industria cerámica?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Paquetes de azulejos y porcelanatos:</strong> Evita
                roturas y deslizamientos, asegurando que los lotes lleguen
                intactos a su destino.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Tejas y ladrillos cerámicos:</strong> Agrupa y compacta
                productos de gran volumen sin comprometer su integridad.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Paletización de piezas cerámicas:</strong> Mantiene la
                estabilidad de los pallets durante el almacenamiento y
                transporte.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Fijación de empaques para exportación:</strong> Protege
                los productos cerámicos en envíos internacionales, reduciendo el
                riesgo de quiebre.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Ventajas de los zunchos FROMM para la industria cerámica
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Alta resistencia y seguridad:</strong> Nuestros zunchos
                soportan cargas pesadas sin deformarse.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Alternativa ecológica:</strong> El zuncho de PET es
                reciclable y no daña la cerámica con oxidación o residuos
                metálicos.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>
                  Compatibilidad con sistemas de flejado automático y manual:
                </strong>{" "}
                Mejora la eficiencia en líneas de producción.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Mayor protección durante el transporte:</strong> Reduce
                vibraciones y movimientos bruscos que pueden afectar la
                mercancía.
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
          <Link
            to="/zunchos-herramientas"
            className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-red font-medium">Zunchos y Herramientas</p>
            <p className="text-sm text-textGray">
              Enzunchadoras y zunchos de alta resistencia
            </p>
          </Link>
          <Link
            to="/envolvedora"
            className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-red font-medium">Envolvedoras</p>
            <p className="text-sm text-textGray">Máquinas envolvedoras</p>
          </Link>
          <Link
            to="/productos"
            className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-red font-medium">Ver Productos</p>
            <p className="text-sm text-textGray">
              Catálogo completo de productos
            </p>
          </Link>
        </div>
      </section>
      <ContactForm
        titulo="Asegura la calidad de tus productos cerámicos con los zunchos PET FROMM. ¡Contáctanos y cotiza la mejor opción para tu empresa!"
        descripcion="Envianos un mensaje y nos pondremos en contacto contigo a la brevedad."
      />
    </>
  );
};
