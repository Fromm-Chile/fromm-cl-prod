import { ContactForm } from "../../components/form/ContactForm";
import { InfoAcordeon } from "../../components/ui/InfoAcordeon";
import { InfoBanner } from "../../components/ui/InfoBanner";

export const Airpads = () => {
  return (
    <>
      <title>Airpads</title>
      <meta
        name="description"
        content="información detallada de las materiales de relleno que comercializamos"
      />
      <meta name="keywords" content="Airpads" />
      <InfoBanner
        category="SOLUCIONES"
        srcImg="https://www.fromm.nl/wp-content/uploads/2024/01/Milieuvriendelijk-inpakken-fromm2-1920x1328.jpg"
        alt="airpads"
        title="AIRPADS"
        desc="Líder en material de relleno"
        buttonTitle="VER PRODUCTOS"
        link="/productos"
      />
      <section className="px-10 md:max-w-[875px] md:m-auto mt-20 md:mb-10 md:mt-20">
        <div className="mb-10">
          <p className="mb-5 italic">
            ¿Está buscando un socio fiable en materia de material de relleno? Ha
            llegado al lugar adecuado. Trabajamos con más de 800 especialistas
            en todo el mundo en el desarrollo, la producción y la venta de
            material de relleno de alta calidad, incluidas las máquinas
            adecuadas. Asequible, flexible y con un ahorro de peso óptimo.
          </p>
          <div className="">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Nuestro material de relleno: Airpad ™
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                Con Airpad™ ofrecemos una solución de embalaje patentada que le
                permite ahorrar entre un 30 y un 35 % de costes. Un sistema de
                embalaje único en el que los cojines de aire se fabrican a
                medida como material de relleno. El espacio lleno está compuesto
                en un 99 % por aire. No hay nada más sostenible que esto. ¿Las
                dimensiones y el material? Usted mismo los elige.
              </p>
              <p className="mb-5 md:text-lg">
                La combinación de nuestros cojines de aire de papel o plástico
                con la máquina adecuada garantiza que sus productos estén
                protegidos de forma óptima con el mínimo material posible.
                Estaremos encantados de explicarle las posibilidades.
              </p>
            </div>
          </div>
        </div>
        <div className="text-textGray bg-primaryGray p-14">
          <p className="text-xl font-bold mb-3">Si eliges FROMM, eliges...</p>
          <ul className="flex flex-col gap-2">
            <li>Material de envasado y máquinas asociadas de máxima calidad</li>
            <li>Trabajo rápido, higiénico y ergonómico con pocos residuos</li>
            <li>
              Atención personalizada por parte de especialistas que optimizan su
              proceso de envasado
            </li>
            <li>Acuerdos claros sobre servicio y mantenimiento</li>
            <li>Expansión flexible en épocas punta</li>
          </ul>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">Papel Airpad™</span>{" "}
              <br />
              Material de relleno de papel
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                ¿Buscas un material de relleno sostenible para tus embalajes?
                Elige el papel Airpad™. Esto no solo garantiza que tus productos
                estén protegidos de forma óptima, sino que también contribuyes a
                un mundo más sostenible. ¿Cuáles son las ventajas del material
                de relleno de papel? Es respetuoso con el medio ambiente y
                biodegradable. Después de su uso, el material de relleno se
                descompone fácilmente en la naturaleza, sin afectar
                negativamente al medio ambiente. ¡Tíralo de forma ordenada junto
                con el papel usado!
              </p>
              <p className="mb-5 md:text-lg">
                El papel también es ligero. Mucho más ligero que muchos otros
                materiales de embalaje. Esto te ayuda a reducir los costes de
                envío sin comprometer la protección durante el transporte.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[70%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/airpadpaper.webp"
              alt="papel-airpad"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-primaryGray pt-10 pb-1 mb-10">
        <div className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10 md:flex md:justify-between md:flex-row-reverse">
          <div className="mb-3 md:w-[50%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Máquinas de llenado de papel
            </h2>
            <p className="mb-5 md:text-lg">
              Nuestras máquinas llenadoras de papel son adecuadas para llenar
              espacios vacíos en cajas, paquetes o embalajes con material de
              relleno de papel. Ofrecemos varias máquinas para satisfacer todas
              sus necesidades de embalaje. Adecuadas para diferentes tipos de
              material de relleno, automatizadas y sostenibles.
            </p>
            <p className="mb-5 md:text-lg">
              La solución de embalaje segura, silenciosa y económica. La máquina
              utiliza nuestro método patentado de plegado de papel. Conseguirá
              una protección óptima de sus productos con una cantidad mínima de
              papel.
            </p>
          </div>
          <div className="mb-20 md:w-[40%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/papermachine.jpg"
              alt="maquina-enzunchadora"
              className=""
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[875px] md:m-auto mt-20 md:mb-10 md:mt-20">
        <div className="mb-10 text-center">
          <h2 className="text-textGray text-lg font-bold mb-6 md:text-xl">
            Material de relleno de papel o plástico
          </h2>
          <p className="mb-5 italic">
            Además de los materiales de relleno de papel, también ofrecemos
            cojines de aire de plástico. Ambos materiales tienen sus propias
            ventajas y la elección depende de varios factores. Piense en la
            sostenibilidad, los costes y el respeto al medio ambiente. Aunque el
            papel tiene una imagen más sostenible que el plástico, esto no es
            del todo cierto. Si el plástico acaba en el flujo de residuos
            correcto, se puede convertir fácilmente en materia prima para nuevos
            productos de plástico. Estaremos encantados de asesorarle sobre el
            mejor material que se adapte a sus necesidades de embalaje.
          </p>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">Lámina Airpad™</span>{" "}
              <br />
              Cojines de aire de plástico
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                El relleno con cojines de aire es la forma más eficaz de fijar
                los productos en un paquete y hacerlos resistentes a los
                impactos. Debido a que se crea una barrera protectora, esta
                técnica se utiliza a menudo para enviar artículos frágiles.
              </p>
              <p className="mb-5 md:text-lg">
                Nuestra película Airpad™ es una forma sostenible e innovadora de
                proteger sus productos durante el transporte. Adecuada tanto
                para aplicaciones ligeras como pesadas. ¿Cómo funciona? La
                película pasa por la máquina y transforma el material en bolsas
                con cojines de aire. Listas para proteger sus productos y
                reciclarse más tarde.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[70%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/airpadzoom.jpeg"
              alt="plastic-airpad"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10 md:flex-row-reverse">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              <span className="text-red font-extralight">
                Eficiencia óptima
              </span>{" "}
              <br />
              Máquinas de colchón de aire
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                Nuestros cojines de aire Airpad™ se producen con máquinas de
                cojines de aire. Se utilizan para muchos fines de embalaje en
                diferentes mercados, como centros de distribución y tiendas web.
                Las máquinas ofrecen varias ventajas, como mayor eficiencia,
                ahorro de costes y tiempo y una calidad de embalaje constante.
              </p>
              <p className="mb-5 md:text-lg">
                Además de las máquinas de cojines de aire (inalámbricas),
                también ofrecemos varios dispositivos ergonómicos. Esto tiene
                varias ventajas, como menor absentismo, mayor productividad,
                mayor seguridad y menos daños.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[70%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/airpadhorizontal.jpeg"
              alt="airpad-horizontal"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
            />
          </div>
        </div>
      </section>
      <ContactForm
        titulo="Ahorre material de relleno. ¡Nuestros expertos le cuentan cómo!"
        descripcion="Estaremos encantados de ayudarle a tomar la decisión correcta. Póngase en contacto con nosotros y le llamaremos."
      />
      <section className="px-10 mb-10 md:max-w-[875px] md:m-auto">
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
            <span className="text-red font-extralight">
              Empaque con una sonrisa
            </span>{" "}
            <br />
            Material de relleno DE FROMM
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              Empaque con una sonrisa. Para ello, hacemos todo lo posible, tanto
              en sentido literal como figurado. Desde ahorros inteligentes y las
              herramientas de flejado más eficientes hasta un servicio óptimo y
              contratos de mantenimiento favorables. Todo ello combinado con
              nuestra atención altamente personalizada, especialistas
              involucrados e innovaciones que realmente contribuyen a los
              resultados dentro de su empresa. Nuestros valores fundamentales
              son claros y distintivos.
            </p>
          </div>
        </div>
        <InfoAcordeon />
        <div className="my-14 bg-primaryGray p-14">
          <h2 className="text-textGray text-lg font-bold mb-6">
            Socio de conocimiento global
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              FROMM es el socio experto en embalajes de final de línea con
              especial atención al flejado. Lo demostramos desde 1947 con
              nuestras innovaciones y soluciones patentadas. Y lo hacemos en
              todo el mundo. Como socio líder en el sector de las máquinas
              flejadoras, le ofrecemos conocimientos del más alto nivel.
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[875px] md:m-auto md:mt-20 md:mb-10">
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
            ¿Por qué material de relleno?
          </h2>
          <div className="mb-3 font-light">
            <p className="mb-5 md:text-lg">
              El material de relleno desempeña un papel crucial en el proceso de
              embalaje por varias razones. En primer lugar, es esencial para
              proteger los productos durante el transporte y el almacenamiento.
              El material de relleno evita golpes, vibraciones y daños que
              pueden producirse durante la manipulación de los paquetes. Esto
              garantiza que sus productos lleguen a su destino sin daños.
              Además, nuestros cojines de aire contribuyen a la presentación de
              sus productos. Garantizan que su producto permanezca firme en el
              embalaje, dándole un aspecto profesional y bien cuidado cuando
              llegue a su cliente. Esto aumenta la satisfacción del cliente y
              fortalece la imagen de su empresa. Además, el material de relleno
              rellena el espacio en las cajas. Esto evita que sus productos se
              muevan y reduce la posibilidad de que haya espacios vacíos en el
              embalaje. Esto contribuye a un uso más eficiente del espacio de
              transporte y a una reducción de los costes de envío.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
