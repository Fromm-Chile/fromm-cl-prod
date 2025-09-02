import { Button } from "../../components/ui/Button";
import { InfoBanner } from "../../components/ui/InfoBanner";
import { InfoProductCard } from "../../components/ui/InfoProductCard";
import { InfoAcordeon } from "../../components/ui/InfoAcordeon";
import { herramientasEnzunchado } from "../../Data/enzunchadoData";
import { ContactForm } from "../../components/form/ContactForm";

export const Zunchos = () => {
  return (
    <>
      <title>Zunchos</title>
      <meta
        name="description"
        content="información detallada de los Zunchos y enzunchadoras que produce Fromm Chile"
      />
      <meta name="keywords" content="zuncho" />
      <InfoBanner
        category="SOLUCIONES"
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadora1.jpeg"
        alt="enzunchadora"
        title="ZUNCHOS Y HERRAMIENTAS"
        desc="HERRAMIENTAS DE ENZUNCHADO PARA USO A GRAN ESCALA"
        buttonTitle="VER PRODUCTOS"
        link="/productos"
      />
      <section className="px-10 md:max-w-[875px] md:m-auto">
        <div className="my-10 p-8">
          <p>
            ¿Está buscando una herramienta de enzunchado que funcione para
            usted? Ha llegado al lugar correcto.
          </p>
        </div>
        <div className="mb-6">
          <div className="text-textGray bg-primaryGray p-6">
            <p className="text-xl font-bold mb-3">Garantizamos:</p>
            <ul className="flex flex-col gap-2">
              <li>
                Una enzunchadora de bajo mantenimiento y un zuncho de alta
                calidad
              </li>
              <li>
                Atención personalizada por parte de especialistas que optimizan
                el proceso de embalaje
              </li>
              <li>Acuerdos claros en cuanto a servicio y mantenimiento</li>
            </ul>
          </div>
        </div>
        <h2 className="text-textGray text-lg font-bold mb-4">
          Una herramienta enzunchadora líder
        </h2>
        <div className="mb-10">
          <p className="mb-5">
            Fabricamos máquinas enzunchadora e insumos de alta calidad para su
            uso a gran escala en la industria del hormigón, centros de
            distribución, logística, industria maderera y metalúrgica. En todo
            el mundo, colaboramos con más de 1.200 especialistas en el
            desarrollo, la producción y la venta de máquinas de embalaje de
            final de línea, equipos e insumos. En total, colaboramos con veinte
            filiales y cincuenta socios especializados.
          </p>
          <Button className="m-auto" link="/">
            DEJANOS AYUDARTE
          </Button>
        </div>
      </section>
      <div className="p-10 bg-primaryGray text-textGray mb-20 md:px-24">
        <h2 className="md:text-textGray md:text-4xl md:font-semibold md:mt-5">
          LA HERRAMIENTA DE ENZUNCHADO ADECUADA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:py-10">
          {herramientasEnzunchado.map((herramienta) => (
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
      <section className="px-10 mb-10">
        <div className="md:max-w-[875px] md:m-auto">
          <div>
            <h2 className="text-textGray text-lg font-bold mb-6">
              Una herramienta de enzunchado de alta calidad
            </h2>
            <div className="mb-3">
              <p className="mb-5">
                Un embalaje logístico eficaz se basa en un equilibrio
                inteligente entre costes y requisitos. Suministramos
                herramientas de enzunchado de alta calidad y y zunchos de máxima
                resistencia. Esto le permite trabajar de forma rápida, eficiente
                y sostenible.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-textGray text-lg font-bold mb-6">
              Líneas de enzunchado completamente automáticas
            </h2>
            <div className="mb-3">
              <p className="mb-5">
                Para el transporte de grandes cantidades de mercancías, una
                máquina enzunchadora totalmente automática es la mejor opción
                desde el punto de vista económico y empresarial. Cuanto más se
                empaqueta para el transporte, más rápido se recupera el dinero
                de la máquina gracias al ahorro inteligente en horas de trabajo
                y material de embalaje. El enzunchado es un método de embalaje
                eficaz. Nuestras máquinas enzunchadoras garantizan que se
                utilice la menor cantidad posible de zuncho para asegurar la
                carga. ¿El resultado? Uso económico de materiales y estabilidad
                óptima durante el transporte.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10 md:flex-row-reverse">
          <div className="md:w-[80%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Tipos de Zunchos
            </h2>
            <div className="mb-3">
              <p className="mb-5 md:text-lg">
                Para encontrar siempre una solución adecuada, ofrecemos cuatro
                tipos diferentes de zuncho. En primer lugar: zuncho de PP.
                Perfecto para trabajos más ligeros como listones pequeños y
                paquetes. Nuestro zuncho de PP está disponible en varios tamaños
                y es resistente a las condiciones climáticas. También ofrecemos
                zuncho de PET. Este tiene una excelente elasticidad. Esto le
                permite enzunchar firmemente paquetes con una pérdida mínima de
                elasticidad. ¿Busca una cinta de zuncho para entornos pesados?
                Entonces nuestro zuncho de PET más resistente o zuncho de acero
                es la elección correcta. Extremadamente fuerte y resistente. Y
                eso sin usar mucho material.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[50%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/frommstraps.jpeg"
              alt="maquina-enzunchadora"
              className=""
            />
          </div>
        </div>
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div>
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              ¿El zuncho de PET es más ecológico que el zuncho de acero?
            </h2>
            <div className="mb-10">
              <p className="mb-5 md:text-lg">
                La respuesta es concisa: sí. La producción y la logística de los
                zunchos de PET son mucho más respetuosas con el medio ambiente
                que las de los zunchos de acero. En primer lugar, para la
                producción de zunchos de acero se utilizan grandes hornos que
                queman continuamente a altas temperaturas. Por otro lado, la
                producción y el reciclaje de zunchos de PET es un proceso
                energéticamente eficiente. Además, los zunchos de PET son cinco
                veces más ligeros que los de acero. Por lo tanto, se utiliza
                menos energía y combustibles fósiles en todos los movimientos
                logísticos de la cadena.
              </p>
              <p className="mb-5 md:text-lg">
                Los zunchos de acero se fabrican a partir de mineral de hierro,
                que primero debe extraerse, con todos los procesos logísticos
                que ello conlleva. Una vez fabricados, los zunchos de PET se
                reciclan constantemente. Y el sistema de reciclado en Chile
                también contribuye al proceso de reciclaje respetuoso con el
                medio ambiente de los zunchos de PET. Este sistema de reciclaje
                de botellas de PET se ha ampliado recientemente y seguirá
                desarrollándose en el futuro, lo que convierte a los zunchos de
                PET en una solución a largo plazo.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/rolloszunchos.jpg"
              alt="rollos-zunchos"
            />
          </div>
        </div>
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-20 md:flex-row-reverse">
          <div>
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Un dispositivo de flejado inteligente para un menor desgaste
            </h2>
            <div className="mb-10">
              <p className="mb-5 md:text-lg">
                Inteligentes, eficientes y de alta calidad. Estas son las
                palabras clave de nuestras máquinas flejadoras totalmente
                automáticas. Nuestros especialistas en I+D diseñan y desarrollan
                sistemas con un mínimo de piezas móviles. Además, los cabezales
                de flejado de estos sistemas suelen estar equipados con sistemas
                de limpieza. Todas estas propiedades garantizan un desgaste
                mínimo. Para el mantenimiento necesario, puede contar con un
                excelente servicio por nuestra parte.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/automaticstrapping.jpeg"
              alt="enzunchado-automatico"
            />
          </div>
        </div>
      </section>
      <ContactForm
        titulo="Ahorre en zunchos. ¡Nuestros expertos le cuentan cómo!"
        descripcion="Nuestros expertos están listos para asesorarlo sobre las mejores soluciones de embalaje posibles que mejor se ajusten a su industria."
      />
      <section className="px-10 mb-10 md:max-w-[875px] md:m-auto">
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6">
            Solución total para su proceso de embalaje
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              En una primera reunión, haremos un balance de las operaciones
              comerciales en torno al flujo de mercancías que desea automatizar.
              Analizaremos las cargas, los flujos de procesos, la situación
              actual y, por supuesto, la situación deseada. A partir de aquí, le
              asesoraremos sobre el sistema óptimo, centrándonos en el espacio
              disponible y en la mejora máxima de la eficiencia. Por supuesto,
              pensaremos de forma innovadora y propondremos soluciones
              alternativas de forma proactiva. Para ello, colaboramos con varios
              integradores de sistemas fiables que se centran continuamente en
              ofrecer una alta calidad. Juntos, ofreceremos la solución total
              deseada.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6">
            Todo es posible
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              Tantas posibilidades, tantas máquinas flejadoras automáticas.
              Dependiendo totalmente del material, todos nuestros sistemas se
              pueden ampliar con diversas opciones como:
            </p>
            <ul className="flex flex-col gap-2 ml-5">
              <li>Flejado horizontal</li>
              <li>Flejado vertical</li>
              <li>
                Brazo robotizado para colocación de vigas de madera y/o
                cantoneras
              </li>
              <li>Sistemas de suministro de cantoneras</li>
              <li>Almacenes de vigas</li>
              <li>Platas giratorias para flejado cruzado</li>
              <li>Flejado paralelo</li>
              <li>Procesamiento de cinta de flejado Jumbo y Superjumbo</li>
              <li>
                Prensa vertical y/o horizontal para compresión y estabilización
                del paquete
              </li>
              <li>Máquina móvil para flejado en múltiples posiciones</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6">
            FROMM: Todo en casa
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
        <div className="mt-14">
          <h2 className="text-textGray text-lg font-bold mb-6">
            ALCANCE INTERNACIONAL
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
    </>
  );
};
