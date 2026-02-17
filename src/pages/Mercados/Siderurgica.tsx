import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Siderurgica = () => {
  return (
    <>
      <title>Industria Siderurgica</title>
      <meta
        name="description"
        content="Soluciones de embalaje en la industria siderurgica"
      />
      <meta name="keywords" content="Industria Siderurgica" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/metalindustry.webp"
        link=""
        category="MERCADO"
        title="INDUSTRIA SIDERURGICA"
        alt="Industria Siderurgica"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Industria metalúrgica: plazos de entrega cortos, máquinas robustas
          </h3>
          <p className="text-justify">
            En la industria metalúrgica, se trabaja con plazos de entrega cortos
            para entregar los productos a tiempo al cliente. Las máquinas
            robustas de FROMM resisten bien las duras condiciones de trabajo.
            Nuestros flejes de alta calidad son fuertes, no se oxidan y
            garantizan que el acero se mantenga unido, sin importar lo pesada
            que sea la carga. Por eso, no en vano, FROMM tiene una buena
            presencia en la industria metalúrgica desde hace años.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/perfilesmetal.jpeg"
          className="h-[400px] w-[400px]"
          alt="perfiles metal"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/rollosalambre.jpeg"
          className="h-[400px] w-[400px]"
          alt="rollos alambre"
          loading="lazy"
        />
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/rollosacerozuncho.jpeg"
          className="h-[400px] w-[400px]"
          alt="rollos acero zuncho"
          loading="lazy"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Gran diversidad de formas de carga
          </h3>
          <p className="text-justify">
            En el metal se da una gran diversidad de formas de carga. Pueden ser
            perfiles largos o enormes rollos de acero. Pueden ser cargas muy
            pesadas o relativamente ligeras. En cualquier caso, se desea evitar
            la corrosión y la oxidación durante el transporte y el
            almacenamiento. El material de embalaje adecuado es esencial. Los
            flejes deben ser lo suficientemente resistentes y no deben oxidarse
            ni absorber humedad.
          </p>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Soluciones de embalaje ergonómicas para la industria siderurgica
          </h3>
          <p className="text-justify">
            Los especialistas de FROMM piensan junto con usted sobre las
            soluciones de embalaje más ergonómicas para la industria del metal.
            Dependiendo del presupuesto y la situación, ofrecemos soluciones
            semiautomáticas o totalmente automáticas. Además, pensamos junto con
            usted en:
          </p>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>La gran diversidad de formas de carga;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>Corrosión y oxidación del metal;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>Peso de los productos;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>Plazos de entrega cortos;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                La influencia del polvo de acero en las condiciones de trabajo;
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>Seguridad y ergonomía de los empleados;</p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            ¿Dónde se usan nuestros zunchos en la industria de metales?
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Flejado de bobinas de acero y aluminio:</strong>{" "}
                Mantiene unidas las bobinas de metal sin deformaciones ni
                desplazamientos.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>
                  Aseguramiento de perfiles metálicos, tubos, alambron de acero:
                </strong>{" "}
                Evita movimientos en paquetes de barras, vigas, tubos,
                alambrones de acero y otros elementos estructurales.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Paletización de chapas y láminas metálicas:</strong>{" "}
                Protege los productos en acero inoxidable, galvanizado o
                aluminio para su distribución segura.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Agrupación de piezas fundidas y maquinadas:</strong>{" "}
                Facilita la manipulación de componentes pesados en la
                fabricación industrial.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Sujeción de chatarra y residuos metálicos:</strong>{" "}
                Optimiza el manejo de material reciclable en plantas de
                recuperación.
              </p>
            </li>
          </ul>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Ventajas de los zunchos FROMM para la industria de metales
          </h3>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Alta resistencia y sujeción firme:</strong> El zuncho de
                acero es ideal para cargas extremadamente pesadas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Alternativa sin corrosión:</strong> El zuncho es una
                excelente opción para metales sensibles a la oxidación.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>Mayor seguridad en el transporte:</strong> Reduce el
                riesgo de accidentes por cargas sueltas o desestabilizadas.
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" alt="" aria-hidden="true" />
              <p>
                <strong>
                  Compatibilidad con enzunchadoras automáticas y manuales:
                </strong>{" "}
                Adaptado a procesos industriales de gran escala.
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
          </ul>
          <p className="text-justify">
            Nos aseguramos de que pueda lograr el resultado deseado con menos
            material de embalaje. Al hacerlo, innovamos todos los aspectos del
            proceso de embalaje. La sustitución del acero por zunchos de PET
            reduce el riesgo de lesiones al cortar un paquete bien flejado.
            Además, los zunchos de PET son infinitamente reciclables, lo que es
            bueno para el medio ambiente y para su bolsillo. Al cambiar de
            zunchos de acero a zunchos de PET, los grandes usuarios pueden
            ahorrar miles de pesos al año. Además, se obtienen ahorros
            adicionales gracias a un peso más ligero y un menor consumo. ¿Quiere
            saber qué podemos hacer por usted? ¡Estaremos encantados de
            planificar su período de amortización y sus ahorros!
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
        titulo="Refuerza la seguridad en la manipulación de metales con los zunchos FROMM."
        descripcion="¡Cotiza con nosotros la mejor opción para tu industria!"
      />
    </>
  );
};
