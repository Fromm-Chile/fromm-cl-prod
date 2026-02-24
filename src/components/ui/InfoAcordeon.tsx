import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { servicesData } from "../../Data/enzunchadoData";

export const InfoAcordeon = () => {
  const [openAcordeon, setOpenAcordeon] = useState<number | null>(1);

  const handleAccordion = (id: number) =>
    setOpenAcordeon((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col divide-y divide-black/10">
      {servicesData.map((service) => {
        const isOpen = openAcordeon === service.id;
        return (
          <div key={service.id}>
            <button
              className="w-full px-3 py-4 cursor-pointer flex justify-between items-center hover:bg-red-50 select-none font-medium text-base text-textGray rounded-lg text-left"
              onClick={() => handleAccordion(service.id)}
              aria-expanded={isOpen}
            >
              <span>{service.title}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-red shrink-0"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-3 pb-4 pt-1 text-sm text-textGray font-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
