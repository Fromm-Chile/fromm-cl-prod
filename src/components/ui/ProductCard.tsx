import { Link } from "react-router-dom";

type ProductCardProps = {
  srcImg: string;
  alt: string;
  name: string;
  subtitle: string;
  link: string;
  state?: object;
};

export const ProductCard = ({
  srcImg,
  alt,
  name,
  subtitle,
  link,
  state,
}: ProductCardProps) => {
  return (
    <Link to={link} state={state}>
      <div className="cursor-pointer hover:scale-[1.02] transition-transform duration-200">
        <div className="bg-white md:min-h-[460px] lg:min-h-[490px] px-5 py-6 my-4 rounded-xl shadow-soft hover:shadow-card-hover hover:border-red border border-primaryGray transition-all duration-200 flex flex-col">
          <img
            src={srcImg}
            alt={alt}
            loading="lazy"
            className="h-[240px] w-[240px] m-auto object-contain"
          />
          <div className="mt-4 flex flex-col gap-2 flex-1">
            <span className="inline-block bg-red-50 text-red text-xs font-medium tracking-widest rounded-full px-3 py-1 w-fit">
              PRODUCTO
            </span>
            <p className="text-base font-semibold text-left mt-1">{name}</p>
            <p className="text-sm font-light text-textGray text-left leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
