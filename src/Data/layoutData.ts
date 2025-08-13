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

export const footerNavData: FooterNavDataType[] = [
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
