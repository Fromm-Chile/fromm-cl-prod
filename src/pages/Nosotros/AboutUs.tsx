import { InfoAcordeon } from "../../components/ui/InfoAcordeon";
import { InfoBanner } from "../../components/ui/InfoBanner";
import { YoutubeEmbed } from "../../components/form/YotubeEmbed";

export const AboutUs = () => {
  return (
    <>
      <title>Fromm Chile - Nosotros</title>
      <meta
        name="description"
        content="FROMM Chile S.A. es una filial productiva y comercial de Fromm Holding Suiza, grupo industrial que desarrolla y produce una amplia variedad de sistemas de embalaje para el transporte y aseguramiento de cargas."
      />
      <meta
        name="keywords"
        content="Fromm Chile, Fromm Holding Suiza, sistemas de embalaje, transporte, aseguramiento de cargas"
      />
      <InfoBanner
        category="NOSOTROS"
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/Flugzeug.jpg"
        alt="nosotros"
        title="ACERCA DE FROMM CHILE"
        desc="LOS ESPECIALISTAS EN SOLUCIONES DE ENZUNCHADO."
        link="/productos"
        buttonTitle="Ver Productos"
      />
      <section className="my-10 px-10 md:m-auto md:mt-20 md:mb-10 md:max-w-[875px]">
        <div className="md:flex md:gap-10 md:m-auto md:mb-3 md:flex-col">
          <h2 className="text-textGray text-lg font-bold md:text-3xl md:font-medium md:uppercase">
            <span className="text-red font-extralight">
              ACERCA DE FROMM CHILE
            </span>{" "}
            <br />
            ENVOLVEMOS CON UNA SONRISA
          </h2>
          <div className="mb-3 font-light">
            <p className="mb-5 md:text-lg">
              FROMM Chile S.A. es una filial productiva y comercial de Fromm
              Holding Suiza, grupo industrial que desarrolla y produce una
              amplia variedad de sistemas de embalaje para el transporte y
              aseguramiento de cargas. El grupo cuenta con una amplia gama de
              productos tales como: enzunchadoras eléctricas y neumáticas,
              sistemas de empaque automáticos, máquinas envolvedoras de pallets,
              sistema Airpad de acolchado para protección de carga y un surtido
              de accesorios para el embalaje
            </p>
            <p className="mb-5 md:text-lg">
              Esta unidad chilena fue fundada en 2006 en concordancia con la
              política de integración vertical del grupo, manteniendo valores
              tradicionales tales como la proximidad con clientes, prioridad por
              la calidad, mantención de nuestra independencia y una estricta
              conciencia ambiental.
            </p>
            <p className="mb-5 md:text-lg">
              Fromm Chile es una de las tres plataformas mundiales productivas
              de zunchos de PET responsable del abastecimiento de estos
              productos para todas Las Américas. Nuestro equipo de especialistas
              se encuentra altamente capacitado para la implementación y uso de
              productos destinados a satisfacer las más altas exigencias de
              calidad en sistemas productivos de vanguardia.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-primaryGray pt-10 pb-1 mb-10">
        <div className="px-10 mb-8 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10 md:flex md:justify-between md:flex-row-reverse">
          <div className="mb-3 md:w-[50%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-bold">Nuestra Misión</span>{" "}
            </h2>
            <p className="mb-5 md:text-lg">
              Nuestra prioridad es superar las expectativas de clientes y
              usuarios finales apoyándonos en nuestro personal, el cual
              representa el origen de nuestro empuje y espíritu de desarrollo.
              El compromiso de Fromm es entregar un servicio íntegro,
              profesional y de excelencia, esgrimiendo como principal fortaleza,
              el innovar y mantener decididamente la capacidad de mejora
              permanente, convencidos de que tanto clientes como proveedores son
              nuestros mejores socios estratégicos.
            </p>
          </div>
          <div className="md:w-[40%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/automated-packaging.webp"
              alt="sistemas-de-embalaje"
              className="h-[300px] w-full"
            />
          </div>
        </div>
        <div className="px-10 mb-8 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10 md:flex md:justify-between md:flex-row">
          <div className="mb-3 md:w-[50%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-bold">Nuestra Visión</span>{" "}
            </h2>
            <p className="mb-5 md:text-lg">
              Ser una Empresa líder a nivel mundial en la Industria del zuncho
              PET, destacándose por la calidad de los productos y el servicio
              integral a nuestro cliente final. A partir de esto, nuestro
              objetivo es convertirnos en un símbolo de credibilidad y confianza
              en el mercado nacional e internacional, destacando los valores
              culturales y cualitativos de nuestra Empresa. Para esto queremos
              gestionar y promover el uso de materias primas recicladas,
              preocupándonos constantemente por mantener un medio ambiente libre
              de contaminación para ser un ejemplo de buena gestión industrial y
              de producción sustentable.
            </p>
          </div>
          <div className="md:w-[40%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/Reinhard-Fromm.jpg"
              alt="maquina-enzunchadora"
              className=""
            />
          </div>
        </div>
      </section>
      <section className="px-10 mb-8 md:m-auto md:mt-20 md:mb-10 md:max-w-[875px]">
        <div className="md:flex md:gap-10 md:m-auto md:mb-3 md:flex-col">
          <h2 className="text-textGray text-lg font-bold md:text-3xl md:font-medium md:uppercase">
            <span className="text-red font-extralight">EMPRESA MODELO</span>{" "}
            <br />
            EJEMPLO DE PRODUCCIÓN ECOLÓGICA Y SUSTENTABLE
          </h2>
          <div className="font-light">
            <p className="md:text-lg">
              Fromm ha sido escogida como empresa modelo al ser ejemplo de
              producción ecológica y sustentable por unificar principios y
              sistemas de reciclaje que aportan un real y efectivo cuidado del
              medioambiente. En este contexto se ha promulgado la ley REP
              (Responsabilidad Reciclaje del Productor) y como empresa líder
              mundial del rubro, el Ministerio del Medioambiente nos ha pedido
              dar nuestro testimonio el cual se plasma en el reportaje exhibido
              en este video.
            </p>
          </div>
        </div>
        <div className="my-10 md:my-20">
          <YoutubeEmbed embedId="ahhvrOdJYSo" className="w-full" />
        </div>
      </section>
      <div className="px-10 md:m-auto md:mt-20 md:mb-10 md:max-w-[875px] mb-8">
        <InfoAcordeon />
      </div>
      <section className="px-10 mb-8 md:m-auto md:mt-20 md:mb-10 md:max-w-[875px]">
        <div className="md:flex md:gap-10 md:m-auto md:mb-3 md:flex-col">
          <h2 className="text-textGray text-lg font-bold md:text-3xl md:font-medium md:uppercase">
            <span className="text-red font-extralight">EN TODO EL MUNDO</span>{" "}
            <br />
            FROMM A NIVEL GLOBAL
          </h2>
          <div className="font-light">
            <p className="md:text-lg">
              FROMM trabaja en todo el mundo con más de 1.200 personas en el
              desarrollo, producción y venta de máquinas, equipos y consumibles
              de embalaje de final de línea. Porque el servicio y la atención al
              cliente deben ser personales, trabajamos a nivel local con más de
              40 oficinas de ventas y servicio, 8 plantas de producción propias
              repartidas por todo el mundo y más de 30 distribuidores a largo
              plazo en más de 50 países.
            </p>
          </div>
          <h3 className="my-5 md:my-0 md:text-lg uppercase font-bold text-textGray">
            Cualquiera que haga negocios con FROMM puede contar con:
          </h3>
          <ul className="flex flex-col gap-2 md:text-lg">
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>
                Equipos de bajo mantenimiento y consumibles de alta calidad;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>
                Atención personalizada de especialistas que optimizan su proceso
                de empaque;
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>Acuerdos claros en cuanto a servicio y mantenimiento;</p>
            </li>
          </ul>
        </div>
        <div className="my-10 md:my-20">
          <img
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-mundo.svg"
            alt="maquina-enzunchadora"
            className=""
          />
        </div>
      </section>
      {/* <section className="px-10 mb-10 md:max-w-[1250px] md:m-auto md:mb-20 bg-primaryGray py-10">
        <FocusCards cards={usSectionCard} />
      </section> */}
    </>
  );
};
