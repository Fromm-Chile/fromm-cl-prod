import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Agricola = () => {
  return (
    <>
      <title>Industria Agrícola</title>
      <meta
        name="description"
        content="Soluciones de flejado en la industria agrícola"
      />
      <meta name="keywords" content="Industria Agrícola" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/agriculture.jpg"
        link=""
        category="MERCADO"
        title="INDUSTRIA AGRICOLA"
        alt="Industria Agricola"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Agricultura - Trabajo eficiente y embalaje resistente
          </h3>
          <p className="text-justify">
            Trabajo eficiente y embalaje resistente. Eso es lo que se necesita
            en la agricultura. Se trabaja con plazos de entrega cortos y con
            productos que deben llegar al cliente rápidamente. Las robustas
            máquinas de embalaje de FROMM son resistentes a diversas condiciones
            de trabajo. Nuestra cinta de flejado es extremadamente resistente,
            no se oxida y garantiza que las pilas de cajas, barriles o cajas
            permanezcan en su lugar. La carga de transporte entra en el camión
            de forma estable y permanece en posición vertical durante el viaje.
          </p>
        </div>
      </section>
      <section className="mb-10 flex gap-5 max-w-[1150px] justify-center m-auto">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/zunchosfrutas.jpeg"
          className="h-[400px] w-[400px]"
          alt="zunchos frutas"
        />
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Soluciones específicas para la agricultura
          </h3>
          <p className="text-justify">
            FROMM cuenta con la experiencia necesaria en métodos de embalaje
            específicos para la agricultura. A menudo se trata de cajas, cajones
            o barriles. Sabemos que hay que elegir métodos de embalaje
            resistentes y eficientes que puedan soportar condiciones de trabajo
            y climáticas adversas. Además, sabemos que la calidad y la frescura
            de los productos son esenciales.
          </p>
          <p className="text-justify">
            Ofrecemos métodos de embalaje personalizados para empresas como:
          </p>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Pesca</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Industria cárnica</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Agricultura</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Horticultura</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Productores de hortalizas</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Productores de frutas</p>
            </li>
          </ul>
        </div>
      </section>
      <ContactForm
        titulo="SOLICITAR COTIZACIÓN"
        descripcion="¿Necesita más información sobre nuestros productos o desea solicitar una cotización sin compromiso? ¡Estamos a su disposición!"
      />
    </>
  );
};
