import { HoverEffect } from "./card-hover-effect";

type Solutions = {
  id: number;
  img: string;
  link: string;
  name: string;
};

const solutions: Solutions[] = [
  {
    id: 1,
    img: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadora1.jpeg",
    link: "/zunchos-herramientas",
    name: "ZUNCHOS",
  },
  {
    id: 2,
    img: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedora.jpeg",
    link: "/envolvedora",
    name: "ENVOLVEDORA",
  },
  {
    id: 3,
    img: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/airpads.jpeg",
    link: "/airpads",
    name: "AIRPADS",
  },
];

export const HomeCard = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={solutions} />
    </div>
  );
};
