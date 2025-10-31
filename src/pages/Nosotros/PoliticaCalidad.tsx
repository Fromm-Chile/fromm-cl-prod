import { InfoBanner } from "../../components/ui/InfoBanner";

export const PoliticaCalidad = () => {
  return (
    <>
      <title>Política de Calidad</title>
      <meta name="description" content="Política de calidad de FROMM Chile" />
      <meta name="keywords" content="Política de calidad" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/politicacalidadm.jpg"
        alt="politica-calidad"
        category="NOSOTROS"
        desc="FROMM Chile"
        link=""
        title="POLÍTICA DE CALIDAD"
        sinBoton
      />
      <section className="my-10 px-10 md:m-auto md:mt-20 md:mb-10 md:max-w-[875px]">
        <div className="md:flex md:gap-10 md:m-auto md:mb-3 md:flex-col">
          <h2 className="text-textGray text-lg font-bold md:text-3xl md:font-medium md:uppercase">
            POLÍTICA DE CALIDAD
          </h2>
          <div className="mb-3 font-light">
            <p className="mb-5 md:text-lg">
              Cómo “Equipo Humano” Fromm Chile S.A – líderes en la fabricación
              de zunchos de poliéster – declaramos que la “Gestión de la
              Calidad” es un pilar fundamental en nuestro actuar. En coherencia
              con lo que declaramos, nos comprometemos a:
            </p>
            <ul className="flex flex-col gap-5 my-5">
              <li className="flex gap-2 items-center">
                <img src="/icons/checkList.svg" />
                <p>
                  Planificar y realizar nuestro trabajo con el objetivo de
                  mantener la satisfacción de nuestras partes interesadas,
                  valorando sus necesidades y expectativas.
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src="/icons/checkList.svg" />
                <p>
                  Mantener implementado el Sistema de Gestión de la Calidad,
                  como herramienta de apoyo para la Dirección Estratégica de la
                  organización.
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src="/icons/checkList.svg" />
                <p>
                  Mejorar continuamente el Sistema de Gestión de la Calidad.
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src="/icons/checkList.svg" />
                <p>
                  Potenciar a nuestros Colaboradores – el “Equipo Humano” que
                  conforma la organización – mediante el desarrollo de
                  competencias que impulsen su desempeño.
                </p>
              </li>
            </ul>
            <p className="mb-5 md:text-lg">
              La Gerencia ha definido objetivos de una forma planificada y
              estructurada alineados con esta Política, para que su ejecución
              facilite la mejora y evolución del sistema.
            </p>
            <p className="mb-5 md:text-lg">
              La Gerencia se compromete al cumplimiento de los requisitos
              legales establecidos por la organización, además de la aplicación
              y seguimiento del Sistema de Gestión de la Calidad haciéndola
              extensible y pública a todo el personal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
