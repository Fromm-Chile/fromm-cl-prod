import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { HomeCard } from "../../components/ui/HomeCard";
import { CustomSelect } from "../../components/ui/CustomSelect";
import { FadeInSection } from "../../components/ui/FadeInSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { apiUrl } from "../../assets/variables";
import { Loader } from "../../components/ui/Loader";

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

  return (
    <>
      {isLoading && <Loader />}
      <title>
        FROMM Chile | Soluciones de Embalaje Industrial - Zunchos, Envolvedoras
        y Airpads
      </title>
      <meta
        name="description"
        content="FROMM Chile - Especialistas en soluciones de embalaje industrial: zunchos de acero y poliéster, envolvedoras de stretch film, airpads y máquinas flejadoras. Representantes de FROMM Suiza en Chile."
      />
      <section>
        {swiperData.length > 0 ? (
          <div className="relative">
            {/* Mobile: aspect-ratio para no cortar */}
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/frommMob.JPG"
              alt="Planta de embalaje industrial FROMM Chile"
              className="w-full aspect-[4/3] object-cover lg:hidden"
            />
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              scrollbar={{ draggable: true }}
              speed={600}
              className="hidden lg:block"
            >
              {swiperData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={item.url}>
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full aspect-[16/6] object-cover"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="relative">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/frommMob.JPG"
              alt="Planta de embalaje industrial FROMM Chile"
              className="w-full aspect-[4/3] object-cover lg:hidden"
            />
            <video
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-chile.mp4"
              className="hidden lg:block w-full aspect-[16/6] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}
        <div className="bg-red text-white flex flex-col items-start px-8 py-7 lg:hidden">
          <h1 className="text-2xl font-bold leading-tight">FROMM CHILE</h1>
          <h2 className="text-xl font-light mb-6 mt-1 leading-snug">
            Embalaje con innovación y precisión
          </h2>
          <ul className="flex flex-col gap-3 w-full">
            {[
              { to: "/zunchos-herramientas", label: "ZUNCHOS" },
              { to: "/zunchos-herramientas", label: "HERRAMIENTAS" },
              { to: "/servicio-tecnico", label: "SERVICIO TÉCNICO" },
            ].map(({ to, label }) => (
              <li key={label} className="group">
                <Link className="flex items-center gap-3 py-1" to={to}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                  <div>
                    <p className="text-xs font-medium text-white/70 tracking-widest">SOLUCIONES</p>
                    <p className="text-base font-semibold">{label}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <main>
        <section className="relative mt-5">
          <div className="bg-primaryGray px-8 pt-20 lg:pt-12 w-full pb-20 lg:flex xl:gap-16 lg:items-center">
            <div className="md:w-[45%] flex flex-col gap-4">
              <p className="font-light text-sm text-red tracking-[0.2em] uppercase">
                Bienvenido
              </p>
              <div>
                <h2 className="text-3xl font-bold text-textGray leading-tight">FROMM CHILE</h2>
                <p className="text-xl font-light text-textGray mt-1">
                  Transformamos el embalaje en una experiencia
                </p>
              </div>
              <img
                src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/sgs.png"
                alt="Certificación SGS de calidad FROMM Chile"
                className="rounded-xl mt-4 mb-4 lg:mb-0 lg:w-[320px] lg:h-[210px] w-[260px] h-[170px] shadow-soft"
                loading="lazy"
              />
            </div>
            <div className="prose-content flex flex-col gap-6 justify-center items-center lg:flex-col-reverse lg:w-[50%] mt-8 lg:mt-0">
              <img
                className="rounded-lg shadow-soft w-full object-cover lg:h-40"
                src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/equipoFromm.webp"
                alt="Equipo de trabajo FROMM Chile"
                loading="lazy"
              />
              <p className="text-base font-light text-textGray leading-relaxed">
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
            className="mb-12 mt-[-22px] w-[170px] m-auto"
          >
            CONTÁCTANOS
          </Button>
        </section>
        <FadeInSection>
          <HomeCard />
          <div className="flex justify-center mb-20">
            <Button link="/productos">VER TODOS LOS PRODUCTOS</Button>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.05}>
        <section className="bg-primaryGray mb-20 py-14">
          <div className="max-w-[80%] m-auto flex flex-col gap-6">
            <p className="font-light text-sm text-red tracking-[0.2em] uppercase">
              Industrias
            </p>
            <h2 className="text-textGray font-semibold text-2xl text-left leading-snug">
              Entregamos la solución perfecta para cada mercado
            </h2>
            <p className="text-textGray font-light text-base leading-relaxed">
              Desde la industria del hormigón hasta los centros de distribución
              y desde la madera hasta la industria agrícola. Ofrecemos la
              solución perfecta para su empresa. Sea cual sea el mercado en el
              que esté activo. Nuestros especialistas estarán encantados de
              pensar junto con usted en las soluciones de embalaje más
              ergonómicas.
            </p>
            <CustomSelect />
          </div>
        </section>
        </FadeInSection>
        <FadeInSection delay={0.05}>
        <section className="mb-20 py-14">
          <div className="prose-content max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%]">
            <h2 className="text-textGray font-semibold text-2xl text-left leading-snug">
              Especialistas en soluciones de embalaje
            </h2>
            <p className="text-textGray font-light text-base leading-relaxed">
              Somos FROMM, especialistas en soluciones de embalaje. Desde
              nuestra sede central en Suiza, nuestros especialistas trabajan día
              y noche para conseguir los mejores productos posibles: para
              asegurar, envolver, rellenar y proteger. Nos aseguramos de que sus
              productos se empaqueten de forma segura. Lo hacemos con máquinas y
              consumibles de alta calidad, plazos de entrega rápidos, atención
              personalizada, bajos costos de embalaje y acceso a un servicio de
              primera.
            </p>
          </div>
        </section>
        </FadeInSection>
        <FadeInSection delay={0.05}>
        <section className="px-8 mb-16 md:m-auto md:mt-16 md:mb-12 md:max-w-[900px]">
          <div className="flex flex-col gap-4 text-center mb-10">
            <p className="font-light text-sm text-red tracking-[0.2em] uppercase">En todo el mundo</p>
            <h2 className="text-textGray text-2xl md:text-3xl font-semibold">
              FROMM a nivel global
            </h2>
            <p className="font-light text-base text-textGray leading-relaxed max-w-[65ch] mx-auto">
              FROMM trabaja en todo el mundo con más de 1.200 personas en el
              desarrollo, producción y venta de máquinas, equipos y consumibles
              de embalaje de final de línea, con más de 40 oficinas y más de 30
              distribuidores en más de 50 países.
            </p>
          </div>
          <div className="my-8 md:my-16">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-mundo.svg"
              alt="Mapa de presencia global de FROMM en más de 50 países"
              loading="lazy"
              className="w-full"
            />
          </div>
        </section>
        </FadeInSection>
      </main>
    </>
  );
};
