import { Link } from "react-router-dom";
import { CustomSelect } from "../../components/ui/CustomSelect";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Markets = () => {
  return (
    <>
      <title>Mercados</title>
      <meta
        name="description"
        content="información de los mercados y aplicaciones de los zunchos"
      />
      <meta name="keywords" content="mercados para el zuncho" />
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/markets.webp"
        category="MERCADOS"
        title="FROMM EN LA INDUSTRIA"
        alt="mercados"
        desc="UNA SOLUCIÓN DE EMBALAJE ADECUADA PARA CADA MERCADO"
        link="/productos"
        buttonTitle="Ver Productos"
      />
      <section className="bg-primaryGray pt-5 pb-1 mb-10">
        <div className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10 md:justify-between md:flex md:items-center">
          <div className="mb-3 md:w-[50%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">MERCADOS</span> <br />
              OFRECEMOS LA SOLUCIÓN PERFECTA PARA SU MERCADO
            </h2>
            <p className="mb-5 md:text-lg font-extralight">
              Nuestras soluciones de embalaje son perfectas para su uso a gran
              escala en todos los mercados, desde la industria del hormigón
              hasta los centros de distribución y desde la logística hasta la
              industria del metal. En nuestra amplia gama, le garantizamos que
              encontrará la solución adecuada para su empresa. ¿Las mayores
              ventajas de nuestros productos? Embalaje estable a bajo coste.
              Protección óptima contra daños. Adecuado para una gran carga de
              trabajo durante todo el día. Fácil de utilizar y de bajo
              mantenimiento. Y podríamos seguir y seguir. ¿Quiere saber qué
              podemos hacer por su mercado? Póngase en contacto con nosotros.
            </p>
          </div>
          <div className="mb-20 md:w-[40%]">
            <CustomSelect />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:justify-between md:flex-row-reverse md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">MERCADOS</span> <br />
              Industria Minera
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg font-extralight">
                En la industria minera, la eficiencia y la seguridad son
                primordiales. Nuestros productos de embalaje están diseñados
                para soportar las condiciones más duras y garantizar que sus
                materiales lleguen a su destino de manera segura y eficiente.
                Desde zunchos resistentes hasta envolvedoras robustas, ofrecemos
                soluciones que se adaptan a las necesidades específicas de la
                minería.
              </p>
              <p className="mb-5 md:text-lg font-extralight">
                Nuestras soluciones de embalaje no solo protegen sus productos,
                sino que también optimizan sus procesos logísticos, reduciendo
                costos y mejorando la productividad. Con nuestra tecnología de
                vanguardia, puede estar seguro de que sus materiales estarán
                seguros durante el transporte y el almacenamiento.
              </p>
              <div className="mb-2 hover:font-bold cursor-pointer text-red font-medium transition-hover duration-300 ease-linear">
                <Link className="flex items-center" to="/mineria">
                  <p>EXPLORA ESTE MERCADO</p>
                  <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-20 md:w-[30%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/mineria.jpg"
              alt="Soluciones de embalaje para industria minera"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:justify-between md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">MERCADOS</span> <br />
              Industria Forestal
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                También tenemos soluciones adecuadas para la industria de la
                madera. ¿Nuestro consejo? Utilice material de embalaje que se
                mueva con la madera. Según la temperatura y el contenido de
                humedad, la madera se expande o se contrae. Por lo tanto, para
                la industria de la madera es importante utilizar material de
                embalaje que se mueva con la madera durante el transporte y el
                almacenamiento. El zuncho de PET ofrece una solución. Con una
                excelente capacidad elástica, se asegura de poder flejar
                firmemente paquetes y fardos de madera con una pérdida mínima de
                elasticidad. ¿Plantas largas o rodapiés? Entonces nuestras
                máquinas envolvedoras de láminas verticales y envolvedoras de
                túnel son perfectas.
              </p>
              <div className="mb-2 hover:font-bold cursor-pointer text-red font-medium transition-hover duration-300 ease-linear">
                <Link className="flex items-center" to="/forestal">
                  <p>EXPLORA ESTE MERCADO</p>
                  <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-20 md:w-[30%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/maderera.jpg"
              alt="Embalaje para industria forestal"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:justify-between md:flex-row-reverse md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">MERCADOS</span> <br />
              Industria Agrícola
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                Embalajes robustos y un trabajo eficiente. Eso es lo que se
                necesita en el sector agrícola. Siempre se trabaja con plazos de
                entrega cortos y productos que deben llegar al cliente muy
                rápidamente. Nuestras robustas máquinas de embalaje resisten a
                las condiciones de trabajo de la A a la Z. Por ejemplo, nuestra
                cinta de flejado es extremadamente resistente, no se oxida y
                garantiza que las pilas estén en su lugar correcto. Ya sean
                cajas, barriles o cartones. La carga de transporte también entra
                en el camión de forma estable. ¡Y su carga se mantiene
                perfectamente en posición vertical durante el viaje!
              </p>
              <div className="mb-2 hover:font-bold cursor-pointer text-red font-medium transition-hover duration-300 ease-linear">
                <Link className="flex items-center" to="/agricola">
                  <p>EXPLORA ESTE MERCADO</p>
                  <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-20 md:w-[30%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/agricultura.jpg"
              alt="Soluciones para industria agrícola"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:justify-between md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">MERCADOS</span> <br />
              Industria Siderúrgica
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                En la industria metalúrgica, se trabaja con plazos de entrega
                cortos para entregar los productos a los clientes en el momento
                justo. Nuestras máquinas robustas son extremadamente resistentes
                a las duras condiciones de trabajo. Por ejemplo, nuestros
                zunchos de alta calidad son extremadamente fuertes, no se oxidan
                y garantizan que el acero se mantenga bien unido. ¡No importa lo
                pesada que sea su carga! No en vano estamos presentes en la
                industria metalúrgica desde hace años.
              </p>
              <div className="mb-2 hover:font-bold cursor-pointer text-red font-medium transition-hover duration-300 ease-linear">
                <Link className="flex items-center" to="/siderurgica">
                  <p>EXPLORA ESTE MERCADO</p>
                  <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-20 md:w-[30%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/siderurgica.jpg"
              alt="Soluciones para industria siderúrgica"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};
