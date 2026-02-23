import { InfoBanner } from "../../components/ui/InfoBanner";
import { ServiceForm } from "../../components/form/ServiceForm";

export const ServicioTecnico = () => {
  return (
    <>
      <title>Servicio Técnico</title>
      <meta
        name="description"
        content="Servicio técnico y mantenimiento de maquinaria de embalaje"
      />
      <meta name="keywords" content="Servicio técnico" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/servicio-tecnico.webp"
        title="SERVICIO TÉCNICO"
        alt="servicio-tecnico"
        category="CONTACTO"
        desc="Nuestro equipo de técnicos especializados en maquinaria de embalaje, le brindará el soporte necesario para mantener su equipo en óptimas condiciones de funcionamiento."
        link="/servicio-tecnico#service-form"
        buttonTitle="Contáctanos"
      />
      <section className="prose-content px-10 md:max-w-[875px] md:m-auto mt-20 md:mb-10 md:mt-20">
        <div className="mb-10">
          <p className="mb-5">
            FROMM CHILE S.A. esta dispuesto a cuidar de nuestros clientes
            brindándoles un servicio completo para nuestros equipos en toda la
            región. Donde quiera que se encuentre, FROMM puede brindarle soporte
            técnico, servicio de mantenimiento completo y entregas rápidas desde
            sus (propios) centros de servicio locales.
          </p>
        </div>
        <div className="text-textGray bg-primaryGray p-6 mb-10">
          <p className="text-xl font-bold mb-3">
            Nuestra dedicación es garantizar una excelente vida útil y
            funcionamiento de todas nuestras máquinas.
          </p>
        </div>
        <div className="mb-10">
          <p className="mb-5">
            Las empresas FROMM ofrecen a sus clientes locales un Servicio y
            Asistencia Técnica garantizado y de calidad, todo esto respaldado
            con personal especializado en todo el equipamiento FROMM. Desde la
            primera consulta, la instalación y la puesta en marcha, durante todo
            el ciclo de vida (con mantenimiento, suministro de piezas de
            repuesto y posibles actualizaciones), se puede estimar programas
            para mantener sus productos FROMM en óptimas condiciones, limitar al
            mínimo los tiempos de inactividad y prolongar su vida útil.
          </p>
        </div>
        <div className="mb-10">
          <p className="mb-5">
            Para las instalaciones de producción es esencial mantener el tiempo
            de inactividad al mínimo. Con el concepto de mantenimiento y
            servicio preventivo FROMM, ofrecemos a nuestros clientes un programa
            de servicio completo en todo el mundo para todos los equipos e
            instalaciones FROMM. Lo mismo se aplica a los tiempos de respuesta,
            el stock y las entregas de piezas y consumibles. Este servicio
            rápido, personalizado y confiable es realizado por ingenieros de
            ventas y servicio capacitados y experimentados, con el objetivo de
            agregar valor a nuestras soluciones de productos.
          </p>
        </div>
      </section>
      <div id="service-form" className="mt-[-35px]">
        <ServiceForm
          titulo="SOLICITUD DE SERVICIO TÉCNICO"
          descripcion="Si desea realizar mantención preventiva, correctiva o adquirir algún repuesto para sus equipos, no dude en contactase con nuestro servicio."
        />
      </div>
    </>
  );
};
