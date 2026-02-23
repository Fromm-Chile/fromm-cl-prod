import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { Button } from "../ui/Button";
import { useState } from "react";
import { navbarData } from "../../Data/NavData";
import { useProductStore } from "../../store/useStore";
import { footerNavData } from "../../Data/layoutData";
import { motion, AnimatePresence } from "framer-motion";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const products = useProductStore((state) => state.products);

  return (
    <>
      {/* WhatsApp flotante */}
      <a
        href="https://api.whatsapp.com/send?phone=56923861404"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed lg:bottom-6 lg:right-6 bottom-24 right-3 z-[1000] group"
      >
        <div className="relative">
          <img
            src="/icons/whatsapp.svg"
            alt=""
            aria-hidden="true"
            className="lg:w-16 lg:h-16 w-14 h-14 drop-shadow-lg group-hover:scale-110 transition-transform duration-200"
            width={64}
            height={64}
          />
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-shadowBlack text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden lg:block">
            WhatsApp
          </span>
        </div>
      </a>

      <Navbar />
      <Outlet />

      <footer className="bg-primaryGray flex flex-col items-center pt-14 pb-8 w-full relative">
        {/* SGS cert */}
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/sgs.png"
          alt="Certificación SGS de calidad FROMM Chile"
          className="rounded-xl lg:w-[200px] lg:h-[128px] w-[160px] h-[100px] absolute lg:top-5 lg:right-72 bottom-[200px] right-6"
          width={200}
          height={128}
          loading="lazy"
        />

        {/* Logo */}
        <Link className="mb-12" to="/" aria-label="FROMM Chile - Inicio">
          <img
            className="max-w-[280px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="FROMM Chile"
            width={280}
            height={48}
            loading="lazy"
          />
        </Link>

        <div className="lg:flex w-full justify-between px-8 lg:px-16">
          {/* Contacto */}
          <div className="self-start mb-8">
            <h2 className="font-semibold text-xl mb-6 tracking-wide">FROMM CHILE</h2>
            <address className="not-italic flex flex-col gap-3 text-sm text-textGray font-light">
              <p className="text-left">
                Avenida Aeropuerto #560,<br />
                Quilicura, Santiago de Chile.
              </p>
              <a href="mailto:contacto@fromm-pack.cl" className="hover:text-red">
                contacto@fromm-pack.cl
              </a>
              <a href="tel:+56225711100" className="hover:text-red">
                +56 2 2571 1100
              </a>
            </address>
          </div>

          {/* Links mobile */}
          <ul className="lg:hidden self-start mb-4 text-red font-medium text-sm flex flex-col gap-3">
            {[
              { to: "/soluciones", label: "Soluciones" },
              { to: "/mercados", label: "Mercados" },
              { to: "/nosotros", label: "Acerca de Fromm" },
              { to: "/productos", label: "Productos" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link className="flex items-center gap-1 hover:underline" to={to}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RRSS mobile */}
          <div className="lg:hidden flex items-center gap-4 mb-6">
            <a href="https://www.instagram.com/frommchile?igsh=ZjcwYjFpZ2E5MWE0" target="_blank" rel="noreferrer" aria-label="Instagram FROMM Chile" className="hover:opacity-75">
              <img src="/icons/Navbar/instagram.svg" width={28} height={28} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/fromm-chile-s-a/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn FROMM Chile" className="hover:opacity-75">
              <img src="/icons/Navbar/linkedin.svg" width={28} height={28} alt="LinkedIn" />
            </a>
          </div>

          {/* Links desktop */}
          <nav aria-label="Navegación del footer" className="hidden lg:block self-start mb-6 relative">
            <div className="grid grid-cols-4 gap-10">
              {footerNavData.map((section) => (
                <div key={section.id} className="text-textGray w-[180px]">
                  <h3 className="text-sm font-semibold mb-4 text-red tracking-wide">
                    {section.name}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {section.subSeccion.map((submenu) => (
                      <li key={submenu.id}>
                        <Link
                          to={submenu.link}
                          className="text-sm text-textGray hover:text-red"
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* RRSS desktop */}
            <div className="flex gap-3 mt-8 absolute bottom-0 right-8">
              <a
                href="https://www.instagram.com/frommchile?igsh=ZjcwYjFpZ2E5MWE0"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram FROMM Chile"
                className="flex items-center gap-2 border border-red/40 rounded-full px-4 py-1.5 text-sm text-textGray hover:bg-red hover:text-white hover:border-red"
              >
                <img src="/icons/Navbar/instagram.svg" width={16} height={16} alt="" aria-hidden="true" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/fromm-chile-s-a/posts/?feedView=all&viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn FROMM Chile"
                className="flex items-center gap-2 border border-red/40 rounded-full px-4 py-1.5 text-sm text-textGray hover:bg-red hover:text-white hover:border-red"
              >
                <img src="/icons/Navbar/linkedin.svg" width={16} height={16} alt="" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 mt-4 mb-24 mx-8 lg:w-[95%] lg:mb-0 w-[90%]">
          <p className="text-textGray text-sm font-light mt-4 lg:text-center">
            © {new Date().getFullYear()} FROMM Chile. Todos los derechos reservados.
          </p>
        </div>

        {/* Mobile bottom bar */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "100%" : "5.5rem" }}
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          className="lg:hidden w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] fixed bottom-0 z-50 flex flex-col justify-between overflow-hidden"
          id="mobile-menu"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, delay: 0.1 }}
                className="flex flex-col justify-between h-full pb-24 pt-6 px-5"
              >
                <div>
                  <img
                    className="max-w-[200px] mx-auto mb-8"
                    src="/img/Navbar/FrommLogo.webp"
                    alt="FROMM Chile"
                    width={200}
                    height={34}
                  />
                  <ul className="flex flex-col">
                    {navbarData.map((item) => (
                      <Link
                        to={item.link}
                        key={item.id}
                        onClick={() => setIsOpen(false)}
                        className="block"
                      >
                        <li className="text-base font-light text-textGray hover:text-red py-3 border-b border-primaryGray last:border-0">
                          {item.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>

                <div className="border border-red/30 rounded-xl px-5 py-4 mt-6 flex flex-col gap-3">
                  <a href="tel:+56225711100" className="flex items-center gap-3 text-textGray hover:text-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2l0 4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>
                    <span className="text-sm font-light">+56 2 2571 1100</span>
                  </a>
                  <a href="mailto:contacto@fromm-pack.cl" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-textGray hover:text-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
                    <span className="text-sm font-light">contacto@fromm-pack.cl</span>
                  </a>
                  <Link to="/cotizacion" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-textGray hover:text-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>
                    <span className={`text-sm ${products.length > 0 ? "font-semibold text-red" : "font-light"}`}>
                      Cotización
                    </span>
                    {products.length > 0 && (
                      <span className="bg-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {products.length}
                      </span>
                    )}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom bar actions */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-between items-center px-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="h-12 w-12 rounded-lg border border-red flex items-center justify-center hover:bg-red-50"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#f10503" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#f10503" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
            <Button link="/contacto">CONTACTO</Button>
          </div>
        </motion.div>
      </footer>
    </>
  );
};
