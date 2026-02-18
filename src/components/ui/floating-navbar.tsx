"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../assets/utils";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { navbarData } from "../../Data/NavData";

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden lg:flex max-w-fit  fixed top-5 inset-x-0 mx-auto bg-white rounded-lg border border-red z-[1500] pr-2 pl-8 py-2  items-center justify-center space-x-4"
        )}
      >
        {/* <div className="flex h-[90px] justify-center items-center bg-white lg:px-3 xl:px-8 lg:h-[130px] lg:justify-between"> */}
        <Link to="/">
          <img
            className="max-w-[250px] xl:max-w-[350px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="fromm-chile"
            width={350}
            height={60}
          />
        </Link>
        <div className="hidden lg:flex justify-between items-center">
          <ul className="text-base font-medium text-textGray flex items-start lg:gap-3 xl:gap-10">
            <>
              {navbarData.map((item, index) => (
                <div className="relative group" key={index}>
                  <Link to={item.link}>
                    <li className="cursor-pointer hover:font-bold transition- duration-300 ease-linear">
                      {item.name}
                    </li>
                  </Link>
                  {item.hasDropdown && item.submenu && (
                    <div className="h-auto w-[250px] rounded-lg border border-red bg-white z-[100] shadow-lg absolute top-6 transition-opacity duration-300 ease-in-out opacity-0 hidden group-hover:opacity-100 group-hover:block">
                      <ul className="py-5">
                        {item.submenu.map((submenu) => (
                          <Link to={submenu.link} key={submenu.id}>
                            <li className="p-1 hover:font-extrabold cursor-pointer flex items-center transition-all duration-300 ease-in">
                              <img src="/icons/chevronRightSmall.svg" alt="" aria-hidden="true" width={16} height={16} />
                              {submenu.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </>
          </ul>
          <Button link="/contacto" className="ml-5">
            CONTACTO
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
