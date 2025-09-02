import { useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useOnClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  type SelectData = {
    id: number;
    value: string;
    link: string;
  };

  const selectData: SelectData[] = [
    {
      id: 1,
      value: "Minería",
      link: "/mineria",
    },
    {
      id: 2,
      value: "Forestal",
      link: "/forestal",
    },
    {
      id: 3,
      value: "Agrícola",
      link: "/agricola",
    },
    {
      id: 4,
      value: "Siderúrgica",
      link: "/siderurgica",
    },
    {
      id: 5,
      value: "CONSTRUCCIÓN",
      link: "/construccion",
    },
    {
      id: 6,
      value: "CERAMICA",
      link: "/ceramica",
    },
    {
      id: 7,
      value: "ENVASES",
      link: "/envases",
    },
    {
      id: 8,
      value: "FIBRAS Y TEXTILES",
      link: "/fibras-textiles",
    },
    {
      id: 9,
      value: "PAPEL",
      link: "/papel",
    },
    {
      id: 10,
      value: "VIDRIO",
      link: "/vidrio",
    },
  ];

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[300px]" ref={selectRef}>
      <div
        className="p-3 rounded-xl border-2 border-red w-full bg-white cursor-pointer flex justify-between items-center"
        onClick={handleToggle}
      >
        <span>{selectedOption || "Tipo de Industria"}</span>
        <div className="h-8 w-8">
          <img src="/icons/chevronDown.svg" />
        </div>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border-2 border-red rounded-xl mt-1 z-10 overflow-hidden uppercase">
          {selectData.map((data) => (
            <Link to={data.link} key={data.id}>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer pl-8"
                onClick={() => handleOptionClick(data.value)}
              >
                {data.value}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
