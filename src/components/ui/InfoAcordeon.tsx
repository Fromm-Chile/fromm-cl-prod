import { useState } from "react";
import { servicesData } from "../../Data/enzunchadoData";

export const InfoAcordeon = () => {
  const [openAcordeon, setOpenAcordeon] = useState<number | null>(1);

  const handleAccordion = (id: number) =>
    setOpenAcordeon((prev) => (prev === id ? null : id));

  return (
    <>
      {servicesData.map((service) => (
        <div key={service.id}>
          <div
            className="px-2 py-5 cursor-pointer flex justify-between items-center hover:bg-gray-100 select-none font-medium text-lg text-textGray"
            onClick={() => handleAccordion(service.id)}
          >
            <p>{service.title}</p>
            {openAcordeon === service.id ? (
              <img src="/icons/minusIcon.svg" />
            ) : (
              <img src="/icons/plusIcon.svg" />
            )}
          </div>
          <div
            className={`border border-t-transparent border-l-transparent border-r-transparent border-b-black ${
              openAcordeon === service.id
                ? "h-auto border border-b-black"
                : "h-0"
            }`}
          >
            <p
              className={`px-3 py-5 ${
                openAcordeon === service.id ? "visible" : "invisible"
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
