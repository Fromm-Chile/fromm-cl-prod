import { ContactForm } from "../../components/form/ContactForm";
import { InfoAcordeon } from "../../components/ui/InfoAcordeon";
import { InfoBanner } from "../../components/ui/InfoBanner";
import { InfoProductCard } from "../../components/ui/InfoProductCard";
import { envolvedoras } from "../../Data/envolvedoraData";

export const MaquinasEnvolvedoras = () => {
  return (
    <>
      <title>Envolvedoras</title>
      <meta
        name="description"
        content="información detallada de las máquinas envolvedoras de FROMM"
      />
      <meta name="keywords" content="envolvedoras" />
      <InfoBanner
        category="SOLUCIONES"
        video
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/maquinaenvolvedora.mp4"
        alt="Maquina envolvedora"
        title="ENVOLVEDORAS"
        desc="LIDERES EN MAQUINARIA ENVOLVEDORA"
        buttonTitle="VER PRODUCTOS"
        link="/productos"
      />
      <section className="px-10 md:max-w-[875px] md:m-auto mt-20 md:mb-10 md:mt-20">
        <div className="mb-10">
          <p className="mb-5">
            FROMM es especialista en soluciones de embalaje. Fabricamos máquinas
            de embalaje con film e insumos de alta calidad para su uso a gran
            escala en todos los mercados, desde la industria del hormigón hasta
            los centros de distribución y desde la industria maderera hasta la
            agricultura. Y todo lo que hay entre medio. Trabajamos en todo el
            mundo con más de 1.200 especialistas en el desarrollo, la producción
            y la venta de máquinas de embalaje de final de línea, equipos e
            insumos. Para lograrlo, colaboramos con más de veinte filiales y
            cincuenta socios especializados. Ya contamos con una amplia gama de
            clientes satisfechos. ¿Será usted el próximo?
          </p>
        </div>
        <div className="text-textGray bg-primaryGray p-6">
          <p className="text-xl font-bold mb-3">Si eliges FROMM, eliges...</p>
          <ul className="flex flex-col gap-2">
            <li>
              Máquinas de embalaje de bajo mantenimiento e insumos de alta
              calidad
            </li>
            <li>
              Atención personalizada por parte de especialistas que optimizan su
              proceso de embalaje
            </li>
            <li>Acuerdos claros y concretos sobre servicio y mantenimiento</li>
            <li>
              Costes de embalaje más bajos gracias a la innovación continua
            </li>
            <li>
              Contratos favorables, excelente soporte técnico y repuestos de
              nuestro propio almacén
            </li>
          </ul>
        </div>
      </section>
      <div className="p-10 text-textGray mb-20 md:px-24">
        <h2 className="md:text-textGray md:text-4xl md:font-semibold md:mt-5 md:text-center">
          NUESTRA MAQUINARIA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:py-10">
          {envolvedoras.map((herramienta) => (
            <InfoProductCard
              key={herramienta.id}
              srcImg={herramienta.srcImg}
              alt={herramienta.alt}
              solution={herramienta.solution}
              name={herramienta.name}
              link={herramienta.link}
            />
          ))}
        </div>
      </div>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10 md:justify-between md:flex-row-reverse">
          <div className="md:w-[50%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Embalaje estable, precio económico
            </h2>
            <div className="mb-3">
              <p className="mb-5 md:text-lg">
                Nuestras máquinas de embalaje garantizan una carga estable a
                bajo coste. Para ello, suministramos film de alta calidad que se
                estira mejor y máquinas de embalaje con film que envuelven más
                con menos material. ¿El resultado? Ahorro directo. Más ventajoso
                que cualquier otra alternativa más económica.
              </p>
            </div>
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Protección óptima contra daños
            </h2>
            <div className="mb-3">
              <p className="mb-5 md:text-lg">
                El embalaje consiste en envolver productos o pallets con una
                fina lámina de plástico. Esto se hace de forma manual o
                mecánica. De esta forma, los materiales quedan agrupados,
                asegurados y protegidos contra daños y suciedad. El embalaje es
                una forma relativamente barata y sencilla de asegurar la carga
                durante el transporte. Además, permite mantener unidos los
                productos fácilmente.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[40%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fotoenvolvedora3.jpeg"
              alt="maquina-envolvedora"
            />
          </div>
        </div>
      </section>
      <section className="bg-primaryGray pt-10 pb-1 mb-10">
        <div className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10 md:justify-between md:flex">
          <div className="mb-3 md:w-[50%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Envoltorio. La solución para tu empresa
            </h2>
            <p className="mb-5 md:text-lg">
              ¿Está eligiendo FROMM? Entonces nos gustaría conocerle mejor.
              Después de una primera presentación, analizaremos en profundidad
              sus problemas logísticos. Juntos, analizaremos qué métodos de
              embalaje son aplicables en su proceso de producción. Juntos,
              haremos un mapa de todo. Investigaremos aspectos como los tipos de
              carga, la tensión correcta del film y el método de adhesión más
              adecuado, por ejemplo. Con este análisis como base, le ofreceremos
              un amplio asesoramiento sobre todas nuestras opciones para un
              embalaje profesional.
            </p>
            <p className="mb-5 md:text-lg">
              ¿Le interesa? Estaremos encantados de mostrarle nuestras
              soluciones inteligentes. Solicite una demostración a uno de
              nuestros especialistas en embalaje.
            </p>
          </div>
          <div className="mb-20 md:w-[40%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedorafoto2.webp"
              alt="maquina-envolvedora"
              className=""
            />
          </div>
        </div>
      </section>
      <ContactForm
        titulo="Ahorre embalaje. ¡Nuestros expertos le cuentan cómo!"
        descripcion="Estaremos encantados de ayudarle a tomar la decisión correcta. Póngase en contacto con nosotros y le llamaremos."
      />
      <section className="px-10 md:max-w-[875px] md:m-auto md:mt-20 md:mb-10">
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6 uppercase">
            Empaque con una sonrisa. <br /> Envuelva con FROMM
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
        <div className="mt-14 bg-primaryGray p-6 mb-10">
          <h2 className="text-textGray text-lg font-bold mb-6 uppercase">
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
      <section className="pt-10 pb-1 mb-10 md:mb-32 md:max-w-[875px] md:m-auto">
        <div className="px-10 md:m-auto md:mt-20 md:mb-10">
          <div className="mb-3">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              ¿Cómo funciona exactamente el envoltorio?
            </h2>
            <p className="mb-5 md:text-lg">
              El envoltorio o envoltura con film es una técnica que se utiliza a
              menudo en la industria del embalaje. Un producto o palé se
              envuelve con film plástico. Esto lo protege y lo estabiliza
              durante el transporte o el almacenamiento. El proceso suele
              comenzar con la colocación del objeto en la máquina. Si opta por
              una envolvedora robotizada o una máquina para envolver palets, el
              producto o palé a menudo permanece en el suelo. A continuación, se
              envuelve el objeto con film plástico. Por supuesto, de forma
              manual o con la ayuda de una máquina. Esto último ahorra tiempo,
              costes y film. Haga los cálculos.
            </p>
          </div>
          <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
            Los beneficios de envolver
          </h2>
          <p className="mb-5 md:text-lg">
            El embalaje ofrece varias ventajas a una empresa. En primer lugar,
            protege contra el polvo, la humedad y los daños durante el
            transporte. También ayuda a estabilizar las cargas, de modo que es
            menos probable que se muevan o se caigan. Además, el embalaje ayuda
            a agrupar varios productos o piezas en una sola unidad. Piense en
            envolver un palé con varias cajas. En definitiva, es un método
            eficiente y eficaz para proteger y estabilizar las mercancías
            durante el transporte y el almacenamiento. Se utiliza ampliamente en
            diversas industrias para mantener la integridad de los productos y
            mejorar la eficiencia de los procesos logísticos. Usted también
            quiere eso, ¿no?
          </p>
        </div>
      </section>
    </>
  );
};
