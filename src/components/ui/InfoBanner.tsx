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
            className="md:h-[520px] md:w-full md:object-cover"
          >
            <source src={srcImg} type="video/mp4" />
          </video>
        ) : (
          <img
            src={srcImg}
            alt={alt}
            loading="lazy"
            className="md:h-[520px] h-[200px] w-full md:w-full md:object-cover"
          />
        )}
        <div className="parent p-6 text-white bg-red flex flex-col gap-1 md:gap-5 md:w-[40%] md:absolute md:bottom-[-20px] md:left-[40px] md:mix-blend-hard-light md:z-50 md:rounded-lg">
          <p className="child font-extralight tracking-widest md:mt-5 md:text-2xl text-left">
            {category}
          </p>
          <h1 className="child font-bold text-2xl md:text-3xl text-left">
            {title}
          </h1>
          <p className="child font-extralight md:text-lg">{desc}</p>
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
