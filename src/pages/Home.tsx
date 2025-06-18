import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/commons/Button";
import { HomeCard } from "../components/HomeCard";
import { CustomSelect } from "../components/commons/CustomSelect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { apiUrl } from "../assets/variables";
import { Loader } from "../components/Loader";

// const swiperData: { id: number; image: string; link: string }[] = [
//   {
//     id: 1,
//     image:
//       "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/PM%20207%20ROJO.jpg",
//     link: "/productos/enzunchadora-mesa-pm207?producto=17",
//   },
//   {
//     id: 2,
//     image:
//       "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fr300%20negro.jpg",
//     link: "/productos/envolvedora-automatica-fr300?producto=78",
//   },
//   {
//     id: 3,
//     image:
//       "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/SISTEMAS%20GRIS%20MEDIO.jpg",
//     link: "/productos?categoryId=23",
//   },
// ];

export type Banner = {
  id: string;
  name: string;
  url: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export const Home = () => {
  const navigate = useNavigate();

  const { data: swiperData = [], isLoading } = useQuery({
    queryKey: ["bannerSwiper"],
    queryFn: async (): Promise<Banner[]> => {
      try {
        const { data } = await axios.get(`${apiUrl}/banners/active`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return data;
      } catch (error) {
        if (error instanceof AxiosError && error.status === 401) {
          navigate("/login");
        } else {
          console.error("Unexpected error:", error);
        }
        return [];
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  console.log(swiperData);

  return (
    <>
      {isLoading && <Loader />}
      <title>Fromm Chile</title>
      <meta
        name="description"
        content="información de la empresa y productos"
      />
      <section>
        <div className="relative">
          <img
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/frommMob.JPG"
            alt="home-picture"
            className="w-full h-[450px] object-cover lg:hidden"
          />
          {/* <video
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-chile.mp4"
            className="hidden lg:block w-full h-[450px] object-cover -z-10"
            autoPlay
            loop
            muted
          ></video> */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            scrollbar={{ draggable: true }}
            speed={500}
          >
            {swiperData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={item.url}>
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-[620px] object-fit lg:block hidden"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bg-red text-white flex flex-col items-start p-8 lg:hidden">
          <h1 className="text-[26px] font-bold">FROMM CHILE</h1>
          <h2 className="text-[26px] font-extralight mb-8">
            EMBALAJE CON INNOVACIÓN Y PRECISIÓN
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="group">
              <Link
                className="flex items-center gap-4"
                to="/zunchos-herramientas"
              >
                <img
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                  src="/icons/chevronRight.svg"
                />
                <div>
                  <h3 className="font-medium text-textGray">SOLUCIONES</h3>
                  <p>ZUNCHOS</p>
                </div>
              </Link>
            </li>
            <li className="group">
              <Link className="flex items-center gap-4" to="/heramientas">
                <img
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                  src="/icons/chevronRight.svg"
                />

                <div>
                  <h3 className="font-medium text-textGray">SOLUCIONES</h3>
                  <p>HERRAMIENTAS</p>
                </div>
              </Link>
            </li>
            <li className="group">
              <Link
                className="flex items-center gap-4"
                to="/zunchos-herramientas"
              >
                <img
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                  src="/icons/chevronRight.svg"
                />
                <div>
                  <h3 className="font-medium text-textGray">SOLUCIONES</h3>
                  <p>SERVICIO TECNICO</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <main>
        <section className="relative mt-24">
          <div className="bg-primaryGray px-8 pt-[100px] lg:pt-24 w-full lg:mt-0 pb-20 lg:flex xl:gap-16">
            <div className="md:w-[45%]">
              <p className="font-extralight text-xl text-red tracking-widest">
                BIENVENIDO!
              </p>
              <p className="text-2xl font-bold text-textGray">FROMM CHILE</p>
              <p className="text-2xl font-extralight text-textGray text-left">
                TRANSFORMAMOS EL EMBAJALE EN UNA EXPERIENCIA
              </p>
              <img
                src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/sgs.png"
                alt="sgs-certifiacion"
                className="rounded-lg mt-8 mb-4 lg:mb-0 lg:w-[350px] lg:h-[230px] w-[280px] h-[180px] lg:rounded-xl m-auto"
              />
            </div>
            <div className="flex flex-col gap-8 justify-center items-center lg:flex-col-reverse lg:w-[50%]">
              <img
                className="border-b-2 border-black lg:h-36"
                src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/equipoFromm.webp"
                alt="fromm-team"
              />
              <p className="font-extralight text-lg text-textGray text-justify">
                El grupo FROMM desarrolla y fabrica diferentes sistemas de
                embalaje para asegurar las mercancías: máquinas flejadoras e
                instalaciones de flejado, envolvedoras de stretch film, máquinas
                envolvedoras, zunchos de acero, zunchos de poliéster, zunchos de
                polipropileno y el sistema patentado Airpad de protección y
                relleno.
              </p>
            </div>
          </div>
          <Button
            link="/contacto"
            className="mb-12 mt-[-28px] w-[170px] m-auto"
          >
            CONTÁCTANOS
          </Button>
        </section>
        <HomeCard />
        <div className="flex justify-center mb-24">
          <Button link="/productos">VER TODOS LOS PRODUCTOS</Button>
        </div>
        <section className="bg-primaryGray mb-24 py-10">
          <div className="max-w-[75%] m-auto flex flex-col gap-5">
            <h3 className="font-extralight text-xl text-red tracking-widest">
              INDUSTRIAS
            </h3>
            <p className="text-textGray font-semibold text-2xl text-left">
              ENTREGAMOS LA SOLUCION PERFECTA PARA CADA MERCADO
            </p>
            <p className="text-justify">
              Desde la industria del hormigón hasta los centros de distribución
              y desde la madera hasta la industria agrícola. Ofrecemos la
              solución perfecta para su empresa. Sea cual sea el mercado en el
              que esté activo. Nuestros especialistas estarán encantados de
              pensar junto con usted en las soluciones de embalaje más
              ergonómicas. Piense en materiales de embalaje resistentes, zunchos
              reciclables y máquinas de alta calidad. Por supuesto, totalmente
              adaptadas a sus deseos, presupuesto y situación.
            </p>
            <CustomSelect />
          </div>
        </section>
        <section className="mb-24 py-10">
          <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
            <h3 className="text-textGray font-semibold text-2xl text-left">
              ESPECIALISTAS EN SOLUCIONES DE EMBALAJE
            </h3>
            <p className="text-justify">
              Somos FROMM, especialistas en soluciones de embalaje. Desde
              nuestra sede central en Suiza, nuestros especialistas trabajan día
              y noche para conseguir los mejores productos posibles: para
              asegurar, envolver, rellenar y proteger. Nos aseguramos de que sus
              productos se empaqueten de forma segura. Lo hacemos con máquinas y
              consumibles de alta calidad, plazos de entrega rápidos, atención
              personalizada, bajos costos de embalaje y acceso a un servicio de
              primera. FROMM no huye de los desafíos; los afrontamos con ambas
              manos. Trabajamos en estrecha colaboración con usted para lograr
              una solución de embalaje óptima.
            </p>
          </div>
        </section>
        <section className="px-10 mb-8 md:m-auto md:mt-20 md:mb-10 md:max-w-[875px]">
          <div className="md:flex md:gap-10 md:m-auto md:mb-3 md:flex-col">
            <h2 className="text-textGray text-lg font-bold md:text-3xl md:font-medium md:uppercase text-center">
              <span className="text-red font-extralight">EN TODO EL MUNDO</span>{" "}
              <br />
              FROMM A NIVEL GLOBAL
            </h2>
            <div className="font-light">
              <p className="md:text-lg text-justify">
                FROMM trabaja en todo el mundo con más de 1.200 personas en el
                desarrollo, producción y venta de máquinas, equipos y
                consumibles de embalaje de final de línea. Porque el servicio y
                la atención al cliente deben ser personales, trabajamos a nivel
                local con más de 40 oficinas de ventas y servicio, 8 plantas de
                producción propias repartidas por todo el mundo y más de 30
                distribuidores a largo plazo en más de 50 países.
              </p>
            </div>
          </div>
          <div className="my-10 md:my-20">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-mundo.svg"
              alt="maquina-enzunchadora"
              className=""
            />
          </div>
        </section>
      </main>
    </>
  );
};
