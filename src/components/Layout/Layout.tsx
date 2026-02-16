import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { Button } from "../ui/Button";
import { useState } from "react";
import { navbarData } from "../../Data/NavData";
import { useProductStore } from "../../store/useStore";
import { footerNavData } from "../../Data/layoutData";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const products = useProductStore((state) => state.products);

  return (
    <>
      <div className="fixed lg:bottom-0 lg:right-0 bottom-24 right-1 z-[1000] m-5 cursor-pointer">
        <a
          href="https://api.whatsapp.com/send?phone=56939522069"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/icons/whatsapp.svg"
            alt="Contactar por WhatsApp"
            className="lg:w-20 lg:h-20 w-16 h-16 hover:border-2 hover:border-red hover:shadow-2xl hover:rounded-xl transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <Navbar />
      <Outlet />
      <footer className="bg-primaryGray h-auto flex flex-col items-center pt-16 pb-9 md:px-32 w-full relative">
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/sgs.png"
          alt="Certificación SGS de calidad FROMM Chile"
          className="rounded-lg lg:w-[220px] lg:h-[140px] w-[180px] h-[110px] lg:rounded-xl absolute lg:top-[18px] lg:right-[285px] bottom-[213px] right-[30px]"
        />
        <Link className="mb-14" to="/">
          <img
            className="max-w-[310px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="fromm-chile"
          />
        </Link>
        <div className="lg:flex w-full justify-between">
          <div className="self-start ml-8 mb-6">
            <h2 className="font-bold text-2xl mb-8">FROMM CHILE</h2>
            <p className="text-textGray font-light mb-4 text-left">
              Dirección: Avenida Aeropuerto #560 <br />
              Quilicura. Santiago de Chile.
            </p>
            <p className="text-textGray font-light mb-4 text-left">
              E-mail: contacto@fromm-pack.cl <br />
              Teléfono: +56 2 2571 1100
            </p>
          </div>
          <ul className="lg:hidden self-start ml-8 mb-2 text-red font-medium">
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/soluciones">
                <p>Soluciones</p>
                <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
              </Link>
            </li>
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/mercados">
                <p>Mercados</p>
                <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
              </Link>
            </li>
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/nosotros">
                <p>Acerca de Fromm</p>
                <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
              </Link>
            </li>
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/productos">
                <p>Productos</p>
                <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" />
              </Link>
            </li>
          </ul>
          <div className="lg:hidden flex items-center justify-start gap-4 mt-2 mb-5 ml-8">
            <a
              href="https://www.instagram.com/frommchile?igsh=ZjcwYjFpZ2E5MWE0"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/Navbar/instagram.svg" width={30} height={30} alt="Instagram FROMM Chile" />
            </a>
            <a
              href="https://www.linkedin.com/company/fromm-chile-s-a/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/Navbar/linkedin.svg" width={30} height={30} alt="LinkedIn FROMM Chile" />
            </a>
          </div>
          <div className="hidden lg:block self-start ml-8 mb-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {footerNavData.map((section) => (
                <div key={section.id} className="text-textGray w-[200px]">
                  <h3 className="text-lg font-bold mb-4 text-red">
                    {section.name}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.subSeccion.map((submenu) => (
                      <li key={submenu.id}>
                        <Link
                          to={submenu.link}
                          className="text-textGray hover:text-red transition duration-300"
                        >
                          <p className="text-left">{submenu.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center flex-col justify-start gap-1 mt-8 absolute bottom-0 right-10">
              <div className="flex items-center gap-4 border hover:border-2 transition-hover duration-150 border-red rounded-full p-2 w-[170px]">
                <a
                  href="https://www.instagram.com/frommchile?igsh=ZjcwYjFpZ2E5MWE0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <img
                    src="/icons/Navbar/instagram.svg"
                    width={40}
                    height={40}
                  />
                  <p>Instagram</p>
                </a>
              </div>
              <div className="flex items-center gap-4 border hover:border-2 transition-hover duration-150 border-red rounded-full p-2 pl-5 w-[170px]">
                <a
                  href="https://www.linkedin.com/company/fromm-chile-s-a/posts/?feedView=all&viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <img
                    src="/icons/Navbar/linkedin.svg"
                    width={40}
                    height={40}
                  />
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-black mb-24 mx-8 lg:w-[95%] lg:text-center w-[90%] lg:mb-0">
          <p className="text-textGray font-light mt-4">
            © 2026 Fromm Chile. Todos los derechos reservados.
          </p>
        </div>
        <div
          className={`lg:hidden w-full bg-white shadow-lg fixed bottom-0 z-50 flex p-5 items-end transition-all duration-1000 ease-in-out ${
            isOpen ? "h-[100%] flex-col justify-between" : "h-[6rem]"
          }`}
        >
          <div className={`w-full ${isOpen ? "block" : "hidden"}`}>
            <div>
              <img
                className="max-w-[250px] m-auto mt-6 mb-10"
                src="/img/Navbar/FrommLogo.webp"
                alt="fromm-chile"
              />
              <div className="m-auto w-full flex justify-center items-center">
                <ul className=" text-xl font-light text-textGray flex flex-col gap-4 items-start w-full">
                  {navbarData.map((item) => (
                    <Link
                      to={item.link}
                      key={item.id}
                      className="m-auto"
                      onClick={() => setIsOpen(false)}
                    >
                      <li className="cursor-pointer hover:text-red transition-colors duration-500 ease-linear">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-[1px] border-red px-6 py-2 mt-8 rounded-lg m-auto max-w-[90%]">
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/Layout/phone.svg" height={30} width={30} alt="" aria-hidden="true" />
                <p className="text-textGray font-light">+56 2 2571 1100</p>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src="/icons/Layout/mail.svg" height={30} width={30} alt="" aria-hidden="true" />
                <a
                  href="mailto:contacto@fromm-pack.cl"
                  onClick={() => setIsOpen(false)}
                  className="text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear"
                >
                  contacto@fromm-pack.cl
                </a>
              </div>
              <div className="flex items-center justify-start gap-4 ml-[-9px]">
                <img src="/icons/money.svg" alt="" aria-hidden="true" />
                <Link
                  to="/cotizacion"
                  className="ml-[-10px]"
                  onClick={() => setIsOpen(false)}
                >
                  <p
                    className={`${
                      products.length > 0
                        ? "font-bold hover:underline"
                        : "text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear"
                    }`}
                  >
                    Cotización
                  </p>
                </Link>
                {products.length > 0 && (
                  <div className="border border-red rounded-full w-16 h-8 flex items-center justify-center bg-white">
                    <p className="text-red font-bold text-lg">
                      {products.length}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 right-0 flex justify-between w-full px-5 lg:hidden">
            <div
              className="h-14 w-14 border-[1px] border-red p-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={isOpen ? "/icons/closeMob.svg" : "/icons/menuMob.svg"}
                alt={isOpen ? "Cerrar menú" : "Abrir menú"}
              />
            </div>
            <div>
              <Button link="/contacto">CONTACTO</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
