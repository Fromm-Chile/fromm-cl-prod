import { ContactForm } from "../../components/ContactForm";
import { InfoBanner } from "../../components/InfoBanner";

export const FibrasTextiles = () => {
  return (
    <>
      <title>Fibras y Textiles</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria de Fibras y Textiles"
      />
      <meta name="keywords" content="Industria de fibras y textiles" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/lalit-kumar-uDoezY1cPLY-unsplash.jpg"
        link=""
        category="MERCADO"
        title="FIBRAS Y TEXTILES"
        alt="Industria de Fibras y Textiles"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Industria de Fibras y Textiles
          </h3>
          <p className="text-justify">
            En la industria textil y de fibras, el correcto embalaje y
            transporte de materiales es clave para evitar daños y optimizar la
            logística. FROMM brinda la resistencia y flexibilidad necesarias
            para asegurar cargas voluminosas y delicadas sin comprometer su
            integridad.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/textiles.jpg"
          className="h-[400px] w-[400px]"
          alt="textiles"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Dónde se usan nuestros zunchos en la industria textil?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Flejado de rollos de tela y textiles:</strong> Mantiene
                los tejidos bien compactados durante el almacenamiento y
                transporte.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Agrupación de fardos de fibras naturales y sintéticas:
                </strong>{" "}
                Evita desplazamientos o deformaciones en algodón, lana,
                poliéster y otros materiales.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Sujeción de bobinas de hilo y cuerdas:</strong>{" "}
                Garantiza la estabilidad de estos insumos en la cadena de
                suministro.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Flejado de empaques industriales de insumos textiles:
                </strong>{" "}
                Ideal para el transporte seguro de materia prima en grandes
                volúmenes.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Ventajas de los zunchos FROMM para fibras y textiles
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Alta resistencia sin dañar los productos:</strong> El
                zuncho de PET es flexible y evita marcas o deformaciones en
                telas y fibras.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Seguridad en el transporte:</strong> Minimiza
                movimientos y desajustes que pueden afectar la calidad de los
                materiales.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>Material reciclable y libre de corrosión:</strong> Ideal
                para sectores que buscan soluciones sustentables.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                <strong>
                  Compatibilidad con sistemas de flejado automático y manual:
                </strong>{" "}
                Se adapta a distintos procesos productivos.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <ContactForm
        titulo="Optimiza tu logística con los zunchos FROMM. ¡Contáctanos para asesoría personalizada y cotizaciones!"
        descripcion="Envianos un mensaje y nos pondremos en contacto contigo a la brevedad."
      />
    </>
  );
};
