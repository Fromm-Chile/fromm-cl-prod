import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Envases = () => {
  return (
    <>
      <title>Industria de Envases</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria de envases"
      />
      <meta name="keywords" content="Industria de envases" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/waldemar-Xlc8HG_FB2k-unsplash.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA DE ENVASES"
        alt="Industria de Envases"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Seguridad y Eficiencia para la Industria de Envases
          </h3>
          <p className="text-justify">
            En la industria de envases y embalajes, la estabilidad de la carga
            es clave para garantizar un transporte seguro y un almacenamiento
            eficiente. <strong>FROMM</strong> ofrece una solución confiable para
            la sujeción de grandes volúmenes de productos en distintos formatos.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envases.png"
          className="h-[400px] w-[400px]"
          alt="Solución de embalaje para industria de envases FROMM"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Dónde se usan nuestros zunchos en la industria de envases?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>
                  Agrupación de botellas y contenedores plásticos:
                </strong>{" "}
                Mantiene en forma segura los packs de botellas, bidones y otros
                envases durante la distribución.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Flejado de cajas de cartón:</strong> Asegura la
                integridad de los paquetes de productos enlatados, alimentos
                envasados y artículos frágiles.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Paletización de envases de vidrio:</strong> Evita el
                movimiento de botellas y frascos de vidrio durante el transporte
                para minimizar pérdidas por rotura.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Aseguramiento de bobinas de papel y cartón:</strong>{" "}
                Imprescindible en la industria del Packaging para el correcto
                manejo y distribución de materias primas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Sujeción de empaques industriales:</strong> Compatible
                con grandes volúmenes de envases flexibles, garantizando
                estabilidad en el almacenamiento.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Ventajas de los zunchos FROMM para el sector de envases
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Alta resistencia y seguridad:</strong> Adaptables a
                distintos tipos de empaques sin dañarlos.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Solución sustentable:</strong> El zuncho de PET es
                reciclable y libre de corrosión, ideal para industrias con
                políticas ecológicas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Optimización de costos logísticos:</strong> Reduce daños
                en el transporte y mejora la eficiencia en líneas de embalaje.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>
                  Compatibilidad con sistemas de flejado automático y manual:
                </strong>{" "}
                Ideal para procesos industriales de alto volumen.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <ContactForm
        titulo="Protege tus productos con la mejor tecnología en zunchado. ¡Consulta con FROMM y encuentra la mejor solución para tu industria!"
        descripcion="Envianos un mensaje y nos pondremos en contacto contigo a la brevedad."
      />
    </>
  );
};
