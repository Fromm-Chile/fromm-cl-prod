import { Link } from "react-router-dom";
import { ContactForm } from "../../components/form/ContactForm";
import { InfoBanner } from "../../components/ui/InfoBanner";
import { InfoProductCard } from "../../components/ui/InfoProductCard";
import { FocusCards } from "../../components/ui/focus-card";
import { productsCard } from "../../Data/enzunchadoData";

export const FilmEmbalaje = () => {
  return (
    <>
      <title>Film de embalaje</title>
      <meta
        name="description"
        content="información detallada de las Film de embalaje que comercializamos"
      />
      <meta name="keywords" content="Film de embalaje" />
      <InfoBanner
        category="SOLUCIONES"
        video
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/videofilm.mp4"
        alt="film-embalaje"
        title="FILM DE EMBALAJE"
        desc="Protección de productos"
        buttonTitle="VER PRODUCTOS"
        link="/productos"
      />
      <section className="px-10 md:max-w-[875px] md:m-auto mt-20 md:mb-10 md:mt-20">
        <div className="mb-10">
          <p className="mb-5">
            El film estirable, también conocido como film de embalaje, es una
            película plástica fina y flexible que se utiliza para envasar y
            proteger productos durante el transporte o el almacenamiento. Ningún
            centro de distribución o tienda online puede prescindir de él.
            Perfecto para enviar tus productos protegidos, estables, seguros y a
            prueba de salpicaduras. ¿No es eso lo que quieres?
          </p>
        </div>
        <div className="text-textGray bg-primaryGray p-16">
          <p className="text-xl font-bold mb-3">
            Film estirable: ahorre costes optando por un film más fino o por un
            estirable de hasta el 360 %
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              El uso del film estirable adecuado tiene un valor incalculable en
              comparación con el coste de los posibles daños durante el envío o
              el almacenamiento. Con nuestro film estirable, tiene la garantía
              de obtener el mejor estándar. Gracias a la protección óptima,
              mejorará la eficiencia del embalaje y del envío dentro de su
              empresa.
            </li>
            <li>
              Nuestra gama de film estirable es muy amplia. Desde transparente
              hasta negro; desde grueso hasta fino. Además, nuestro film está
              disponible en tamaños de la A a la Z. Entonces, ¿quiere que su
              paquete, palé u otra carga esté segura y protegida? Le ayudamos a
              elegir el film estirable que mejor se adapte a sus deseos y
              necesidades.
            </li>
          </ul>
        </div>
      </section>
      <div className="p-10 text-textGray mb-20 md:px-24">
        <h2 className="md:text-textGray md:text-4xl md:font-semibold md:mt-5 md:text-center">
          FILM DE EMBALAJE
        </h2>
        <div className="flex justify-center md:w-[100%] md:max-w-[350px] h-[600px] md:m-auto gap-5 md:py-10">
          <InfoProductCard
            srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedora2.jpeg"
            alt="film-embalaje"
            solution="EMBALAJE"
            name="Film de Embalaje"
            link=""
          />
        </div>
      </div>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10 md:flex-row-reverse">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              ¿Por qué envolver con film?
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                El film de embalaje se utiliza para proteger los productos del
                polvo, la suciedad, la humedad y los daños durante el transporte
                o el almacenamiento. Al envolver los productos con el film, se
                crea un embalaje resistente y seguro. Esto evita que los
                productos se muevan o se dañen.
              </p>
              <p className="mb-5 md:text-lg">
                La aplicación del film de embalaje se puede realizar
                manualmente. También hay envolvedoras automáticas disponibles
                que automatizan completamente el proceso. El uso de una máquina
                suele conducir a un uso más eficiente del film y a una menor
                generación de residuos. No solo ahorra costes, sino que también
                es respetuoso con el medio ambiente.
              </p>
              <p className="mb-5 md:text-lg">
                Al utilizar el film adecuado que se adapte a las operaciones de
                su empresa, ahorrará en sus costes de embalaje. ¿Quiere
                estabilizar y proteger las cargas con la menor cantidad posible
                de film de embalaje? FROMM es la elección correcta.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[70%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/filmfoto1.webp"
              alt="film-embalaje"
              className="md:min-h-[400px] md:max-h-[450px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="px-10 md:max-w-[1250px] md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div className="md:w-[60%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Film estirable y las mejores máquinas envolvedoras
            </h2>
            <div className="mb-3 font-light">
              <p className="mb-5 md:text-lg">
                No hay film para envolver sin una máquina envolvedora. Al menos,
                eso es lo que nos pregunta a nosotros. Con nuestras envolvedoras
                de film, envuelves un producto o palé con film. De esta manera,
                tus materiales quedan agrupados, asegurados y protegidos de
                forma óptima. Una forma relativamente barata y sencilla de
                asegurar de forma segura tu carga durante el transporte.
                Nuestras máquinas, duraderas, fiables y bien pensadas, son
                adecuadas para envolver cualquier tipo de producto o envío.
                Incluido el tuyo.
              </p>
              <p className="mb-5 md:text-lg">
                Nuestra gama de máquinas envolvedoras de film es muy amplia. Sin
                embargo, todas las máquinas tienen una serie de características
                en común. Están fabricadas con una calidad probada a un precio
                competitivo. Son fáciles de manejar. Están disponibles en varios
                diámetros de aro y con una velocidad de envoltura ajustable. Por
                si fuera poco, también son fáciles de mantener. Nos queda una
                pregunta: ¿qué máquina envolvedora elegirás?
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[70%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/filmfoto2.webp"
              alt="film-embalaje"
              loading="lazy"
              className=""
            />
          </div>
        </div>
      </section>
      <section className="px-10 mb-10 md:max-w-[1250px] md:m-auto md:mb-20">
        <h2 className="text-textGray text-2xl font-semibold">PRODUCTOS</h2>
        <p className="mb-10">NUESTRAS SOLUCIONES</p>
        <FocusCards cards={productsCard} />
      </section>
      <section className="px-10 mb-10 md:max-w-[875px] md:m-auto">
        <h3 className="text-textGray text-lg font-bold mb-6 md:text-2xl">
          Mercados que atendemos
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/mineria" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Minería</p>
          </Link>
          <Link to="/forestal" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Forestal</p>
          </Link>
          <Link to="/siderurgica" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Siderúrgica</p>
          </Link>
          <Link to="/agricola" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Agrícola</p>
          </Link>
          <Link to="/construccion" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Construcción</p>
          </Link>
          <Link to="/ceramica" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Cerámica</p>
          </Link>
          <Link to="/envases" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Envases</p>
          </Link>
          <Link to="/fibras-textiles" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Fibras Textiles</p>
          </Link>
          <Link to="/papel" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Papel</p>
          </Link>
          <Link to="/vidrio" className="p-4 bg-primaryGray rounded-lg hover:shadow-md transition-shadow">
            <p className="text-red font-medium">Vidrio</p>
          </Link>
        </div>
      </section>
      <ContactForm
        titulo="¿Buscas un film de embalaje resistente?"
        descripcion="En FROMM estás en el lugar correcto. Nuestros expertos estarán encantados de asesorarte. Déjanos tus datos y nos pondremos en contacto contigo."
      />
    </>
  );
};
