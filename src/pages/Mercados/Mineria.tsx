import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Mineria = () => {
  return (
    <>
      <title>Industria Minera</title>
      <meta
        name="description"
        content="Soluciones de flejado en la industria minera"
      />
      <meta name="keywords" content="Industria Minera" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/mining.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA MINERA"
        alt="Industria Minera"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Aplicaciones de flejado en la industria minera: Garantizando el
            transporte seguro de cargas pesadas
          </h3>
          <p className="text-justify">
            En la industria minera, donde las cargas pesadas y las formas
            irregulares son comunes, las soluciones de flejado seguro son
            esenciales para garantizar un transporte seguro. Las robustas
            máquinas de flejado de FROMM están diseñadas para resistir las
            condiciones exigentes del sector minero. Nuestros materiales de
            flejado de alta calidad son resistentes, a prueba de corrosión y
            están diseñados para mantener las cargas seguras, sin importar lo
            desafiantes que sean las condiciones. Por eso, no es en vano que
            FROMM sea un socio confiable en la industria minera desde hace
            muchos años.
          </p>
        </div>
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Soluciones de flejado diversificadas para aplicaciones mineras
          </h3>
          <p className="text-justify">
            La industria minera presenta una amplia gama de desafíos de flejado,
            desde asegurar equipos grandes hasta transportar materiales pesados.
            Es crucial prevenir la corrosión y la oxidación durante el
            transporte y el almacenamiento. El material de embalaje adecuado es
            vital para garantizar la integridad de la mercancía. Los flejes
            deben ser fuertes, resistentes a la corrosión y absorbentes de la
            humedad en entornos mineros.
          </p>
          <p className="text-justify">
            Nuestros expertos en FROMM colaboran con usted para desarrollar
            soluciones de embalaje ergonómicas adaptadas a la industria minera.
            Dependiendo de sus requisitos y presupuesto, ofrecemos soluciones
            semiautomáticas o totalmente automáticas. Abordamos varios aspectos,
            incluyendo:
          </p>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                Diversidad de requisitos de flejado en aplicaciones mineras;
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Estrategias de prevención de corrosión y oxidación;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Consideraciones de peso para productos mineros;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Manejo eficiente de plazos de entrega cortos;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Influencia del polvo de acero en las condiciones laborales;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Seguridad y ergonomía de los empleados;</p>
            </li>
          </ul>
          <p className="text-justify">
            Nos aseguramos de que logre los resultados deseados con menos
            material de embalaje. Al innovar en cada aspecto del proceso de
            embalaje, le ayudamos a lograr ahorros y eficiencia. El cambio de
            flejado de acero tradicional a flejado de PET reduce el riesgo de
            lesiones y ofrece beneficios ambientales. ¡Permítanos ayudarle a
            planificar su retorno de inversión y ahorros!
          </p>
        </div>
      </section>
      <ContactForm
        titulo="¿Necesita más información sobre nuestras soluciones de flejado para la industria minera?"
        descripcion="Envíenos un mensaje y nos pondremos en contacto con usted de inmediato."
      />
    </>
  );
};
