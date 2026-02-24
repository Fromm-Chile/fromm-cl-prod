import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../assets/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { navbarData } from "../../Data/NavData";

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const location = useLocation();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "hidden lg:flex fixed top-4 inset-x-0 mx-auto w-fit z-[1500]",
          "bg-white/95 backdrop-blur-sm rounded-xl border border-red/20 shadow-card",
          "pr-3 pl-6 py-2 items-center gap-6"
        )}
      >
        <Link to="/" aria-label="FROMM Chile - Inicio">
          <img
            className="max-w-[180px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="FROMM Chile"
            width={180}
            height={31}
          />
        </Link>
        <nav aria-label="Navegación flotante">
          <ul className="text-sm font-medium text-textGray flex items-center gap-1">
            {navbarData.map((item) => {
              const isActive = location.pathname === item.link ||
                item.submenu?.some(s => location.pathname === s.link);
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown ? setOpenDropdown(item.id) : null}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.link}
                    className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md hover:text-red ${isActive ? "text-red font-semibold" : ""}`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : ""}`} aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    )}
                  </Link>
                  {item.hasDropdown && item.submenu && (
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-[200px] rounded-xl border border-red/20 bg-white shadow-card z-[1000] overflow-hidden"
                        >
                          <ul className="py-2">
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  to={submenu.link}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-textGray hover:bg-red-50 hover:text-red"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
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
        </nav>
        <Button link="/contacto" className="text-sm py-2 px-4">
          CONTACTO
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
