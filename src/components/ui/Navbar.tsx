import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { FloatingNav } from "./floating-navbar";
import { navbarData } from "../../Data/NavData";
import { useProductStore } from "../../store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const products = useProductStore((state) => state.products);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:flex bg-primaryGray h-[42px] items-center justify-end pr-16 text-textGray text-sm gap-8">
        <a
          href="tel:+56225711100"
          className="flex items-center gap-1.5 hover:text-red"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2l0 4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>
          <span>+56 2 2571 1100</span>
        </a>
        <span className="text-primaryGray select-none">|</span>
        <a
          href="mailto:contacto@fromm-pack.cl"
          className="flex items-center gap-1.5 hover:text-red"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
          <span>contacto@fromm-pack.cl</span>
        </a>
        <span className="text-primaryGray select-none">|</span>
        <Link
          to="/cotizacion"
          className="flex items-center gap-1.5 hover:text-red relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>
          <span className={products.length > 0 ? "font-semibold text-red" : ""}>
            Cotización
          </span>
          {products.length > 0 && (
            <span className="ml-1 bg-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {products.length}
            </span>
          )}
        </Link>
      </div>

      <FloatingNav />

      {/* Main navbar */}
      <header className="flex h-[90px] justify-center items-center bg-white lg:px-6 xl:px-10 lg:h-[120px] lg:justify-between shadow-soft">
        <Link to="/" aria-label="FROMM Chile - Inicio">
          <img
            className="max-w-[220px] xl:max-w-[300px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="FROMM Chile"
            width={300}
            height={52}
          />
        </Link>
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-2">
          <ul className="text-sm font-medium text-textGray flex items-center gap-1 xl:gap-2">
            {navbarData.map((item) => {
              const isActive = location.pathname === item.link ||
                (item.submenu?.some(s => location.pathname === s.link));
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown ? setOpenDropdown(item.id) : null}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.link}
                    className={`relative px-3 py-2 rounded-md flex items-center gap-0.5 hover:text-red group ${isActive ? "text-red font-semibold" : ""}`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : ""}`} aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red rounded-full" />
                    )}
                  </Link>

                  {item.hasDropdown && item.submenu && (
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1 w-[220px] rounded-xl border border-red/20 bg-white shadow-card z-[1000] overflow-hidden"
                        >
                          <ul className="py-2">
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  to={submenu.link}
                                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-textGray hover:bg-red-50 hover:text-red"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                                  {submenu.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>
          <Button link="/contacto" className="ml-4">
            CONTACTO
          </Button>
        </nav>
      </header>
    </>
  );
};
