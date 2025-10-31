import { Link } from "react-router-dom";

type InfoProductCardProps = {
  srcImg: string;
  alt: string;
  solution: string;
  name?: string;
  link: string;
};

export const InfoProductCard = ({
  srcImg,
  alt,
  solution,
  name,
  link,
}: InfoProductCardProps) => {
  return (
    <Link to={link}>
      <div className="bg-white px-5 py-8 my-5 h-auto min-h-[550px] flex flex-col justify-between rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
        <div className="flex items-center">
          <img src={srcImg} alt={alt} className="object-cover" loading="lazy" />
        </div>
        <div>
          <p className="tracking-widest text-red font-extralight text-lg">
            {solution}
          </p>
          <p className="text-lg font-bold mb-8">{name}</p>
        </div>
      </div>
    </Link>
  );
};
