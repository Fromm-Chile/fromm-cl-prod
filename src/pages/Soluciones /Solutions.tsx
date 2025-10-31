import { CustomSelect } from "../../components/ui/CustomSelect";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";
import { FocusCards } from "../../components/ui/focus-card";
import { solutionCard } from "../../Data/SolutionsData";

export const Solutions = () => {
  return (
    <>
      <title>Soluciones</title>
      <meta
        name="description"
        content="información detallada de cada categoría de soluciones"
      />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/PETband.jpg"
        alt="soluciones"
        title="PRODUCTOS Y SOLUCIONES DE EMBALAJE"
        desc="FROMM Chile S.A. es una filial productiva y comercial de Fromm Holding Suiza, grupo industrial que desarrolla y produce una amplia variedad de sistemas de embalaje para el transporte y aseguramiento de cargas."
        link="/productos"
        buttonTitle="Ver Productos"
        category="NUESTAS SOLUCIONES"
      />
      <section className="px-10 mb-10 md:max-w-[1250px] md:m-auto py-20">
        <FocusCards cards={solutionCard} />
      </section>
      <section className="bg-primaryGray mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5">
          <h3 className="font-extralight text-xl text-red tracking-widest">
            INDUSTRIAS
          </h3>
          <p className="text-textGray font-semibold text-2xl">
            ENTREGAMOS LA SOLUCION PERFECTA PARA CADA MERCADO
          </p>
          <p>
            Desde la industria del hormigón hasta los centros de distribución y
            desde la madera hasta la industria agrícola. Ofrecemos la solución
            perfecta para su empresa. Sea cual sea el mercado en el que esté
            activo. Nuestros especialistas estarán encantados de pensar junto
            con usted en las soluciones de embalaje más ergonómicas. Piense en
            materiales de embalaje resistentes, zunchos reciclables y máquinas
            de alta calidad. Por supuesto, totalmente adaptadas a sus deseos,
            presupuesto y situación.
          </p>
          <CustomSelect />
        </div>
      </section>
      <ContactForm
        titulo="SOLICITUD DE INFORMACIÓN"
        descripcion="Si desea recibir más información sobre nuestros productos y soluciones de embalaje, no dude en contactarnos."
      />
    </>
  );
};
