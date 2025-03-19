import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Button } from "./commons/Button";
import { useState } from "react";
import { navbarData } from "../Data/NavData";
import { useProductStore } from "../store/useStore";

type SubSeccion = {
  id: number;
  name: string;
  link: string;
};

type FooterNavDataType = {
  id: number;
  name: string;
  subSeccion: SubSeccion[];
};

const footerNavData: FooterNavDataType[] = [
  {
    id: 1,
    name: "PRODUCTOS",
    subSeccion: [
      { id: 1, name: "Accesorios de Embalaje", link: "/productos" },
      { id: 2, name: "Airpads", link: "/productos" },
      { id: 3, name: "Herramientas de Apoyo", link: "/productos" },
      { id: 4, name: "Máquinas Envolvedoras", link: "/productos" },
      { id: 5, name: "Máquinas y Herramientas", link: "/productos" },
      { id: 6, name: "Sistemas de Embalaje", link: "/productos" },
      { id: 7, name: "Zunchos", link: "/productos" },
    ],
  },
  {
    id: 2,
    name: "SOLUCIONES",
    subSeccion: [
      { id: 1, name: "Zunchos", link: "/zunchos-herramientas" },
      { id: 2, name: "Envolvedoras", link: "/envolvedora" },
      { id: 3, name: "Film de Embalaje", link: "/film-embalaje" },
      { id: 4, name: "Airpads", link: "/airpads" },
    ],
  },
  {
    id: 3,
    name: "MERCADOS",
    subSeccion: [
      { id: 1, name: "Minería", link: "/mineria" },
      { id: 2, name: "Forestal", link: "/forestal" },
      { id: 3, name: "Agrícola", link: "/agricola" },
      { id: 4, name: "Siderúrgica", link: "/siderurgica" },
    ],
  },
  {
    id: 4,
    name: "NOSOTROS",
    subSeccion: [
      { id: 1, name: "Nosotros", link: "/nosotros" },
      { id: 2, name: "Política de Calidad", link: "/politica-calidad" },
      { id: 3, name: "Código de Ética", link: "/codigo-etica" },
    ],
  },
];

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
            alt="mensajeria-movil"
            className="lg:w-20 lg:h-20 w-16 h-16 hover:border-2 hover:border-red hover:shadow-2xl hover:rounded-xl transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <Navbar />
      <Outlet />
      <footer className="bg-primaryGray h-auto flex flex-col items-center pt-16 pb-9 md:px-32 w-full">
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
          <ul className="lg:hidden self-start ml-8 mb-8 text-red font-medium">
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/soluciones">
                <p>Soluciones</p>
                <img src="/icons/chevronRightSmall.svg" />
              </Link>
            </li>
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/mercados">
                <p>Mercados</p>
                <img src="/icons/chevronRightSmall.svg" />
              </Link>
            </li>
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/nosotros">
                <p>Acerca de Fromm</p>
                <img src="/icons/chevronRightSmall.svg" />
              </Link>
            </li>
            <li className="mb-2 hover:font-bold cursor-pointer">
              <Link className="flex items-center" to="/productos">
                <p>Productos</p>
                <img src="/icons/chevronRightSmall.svg" />
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block self-start ml-8 mb-6">
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
          </div>
        </div>
        <div className="border-t-[1px] border-black mb-24 mx-8 lg:w-[95%] lg:text-center lg:mb-0">
          <p className="text-textGray font-light mt-4">
            © 2025 Fromm Chile. Todos los derechos reservados.
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
                <img src="/icons/Layout/phone.svg" height={30} width={30} />
                <p className="text-textGray font-light">+56 2 2571 1100</p>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src="/icons/Layout/mail.svg" height={30} width={30} />
                <a
                  href="mailto:contacto@fromm-pack.cl"
                  onClick={() => setIsOpen(false)}
                  className="text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear"
                >
                  contacto@fromm-pack.cl
                </a>
              </div>
              <div className="flex items-center justify-start gap-4 ml-[-9px]">
                <img src="/icons/money.svg" />
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
