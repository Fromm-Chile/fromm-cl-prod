import { Button } from "./Button";

type InfoBannerProps = {
  srcImg: string;
  alt: string;
  title: string;
  desc: string;
  buttonTitle?: string;
  link: string;
  video?: boolean;
  sinBoton?: boolean;
  category: string;
  onClick?: () => void;
};

export const InfoBanner = ({
  srcImg,
  alt,
  title,
  desc,
  buttonTitle,
  link,
  video,
  sinBoton,
  category,
  onClick,
}: InfoBannerProps) => {
  return (
    <div>
      <div className="md:relative">
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-[16/7] object-cover"
          >
            <source src={srcImg} type="video/mp4" />
          </video>
        ) : (
          <img
            src={srcImg}
            alt={alt}
            loading="lazy"
            className="w-full aspect-[4/3] md:aspect-[16/7] object-cover"
          />
        )}
        <div className="p-6 text-white bg-red flex flex-col gap-2 md:gap-4 md:w-[38%] md:absolute md:bottom-[-16px] md:left-10 md:mix-blend-hard-light md:z-50 md:rounded-xl">
          <p className="font-light tracking-widest text-sm md:text-base text-left uppercase">
            {category}
          </p>
          <h1 className="font-bold text-2xl md:text-3xl text-left leading-tight">
            {title}
          </h1>
          <p className="font-light text-sm md:text-base leading-relaxed">{desc}</p>
          {sinBoton ? null : (
            <Button link={link} whiteButton onClick={onClick}>
              {buttonTitle}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
