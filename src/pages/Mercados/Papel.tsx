import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Papel = () => {
  return (
    <>
      <title>Industria del Papel</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria del papel"
      />
      <meta name="keywords" content="Industria del papel" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/paper-indutry.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA DEL PAPEL"
        alt="Industria del Papel"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Industria de Papel
          </h3>
          <p className="text-justify">
            En la industria del papel, el embalaje seguro y eficiente es clave
            para garantizar que los productos lleguen en perfectas condiciones a
            su destino. FROMM ofrece una solución confiable para el
            aseguramiento de cargas voluminosas y pesadas, manteniendo la
            estabilidad durante el almacenamiento y transporte.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/papel1.jpeg"
          className="h-[400px] w-[400px]"
          alt="papel"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/papel2.jpg"
          className="h-[400px] w-[400px]"
          alt="papel"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Dónde se usan nuestros zunchos en la industria del papel?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Flejado de bobinas de papel:</strong> Mantiene firmes
                las bobinas de papel kraft, papel prensa, papel reciclado y
                otros materiales durante su almacenamiento y traslado.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Agrupación de cartón corrugado y planchas de cartón:
                </strong>{" "}
                Asegura la estabilidad de los paquetes de cartón utilizados en
                la fabricación de empaques y embalajes.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Paletización de papel para impresión y embalaje:
                </strong>{" "}
                Evita movimientos que puedan generar daños en resmas de papel,
                etiquetas y otros productos gráficos.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Sujeción de paquetes de papel reciclado:</strong>{" "}
                Optimiza el transporte de papel reciclado compactado para su
                reutilización.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Flejado de cajas y empaques terminados:</strong>{" "}
                Facilita la logística de distribución de productos empacados en
                cartón o papel.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Ventajas de los zunchos FROMM para la industria del papel
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Alta resistencia y flexibilidad:</strong> Se adapta a
                cargas voluminosas sin dañarlas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Alternativa ecológica:</strong> El zuncho de PET es
                reciclable y una excelente opción para industrias sustentables.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Protección en el transporte y almacenamiento:</strong>{" "}
                Evita deslizamientos y deformaciones en los paquetes de papel y
                cartón.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Compatibilidad con equipos de flejado:</strong> Funciona
                con sistemas automáticos y manuales, optimizando la eficiencia
                en la producción.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Aseguramiento de bobinas de papel y cartón:</strong>{" "}
                Imprescindible en la industria del Packaging para el correcto
                manejo y distribución de materias primas.
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
