import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type ButtonProps = PropsWithChildren<{
  link: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
  whiteButton?: boolean;
}>;

export const Button = ({
  children,
  link,
  onClick,
  className,
  whiteButton,
}: ButtonProps) => {
  return (
    <div className="w-fit m-auto">
      <Link to={link} onClick={onClick}>
        <div
          className={`px-5 py-3 rounded-lg font-semibold tracking-wide text-base border-2 border-red active:scale-95 ${
            whiteButton
              ? "bg-white text-textGray hover:bg-red hover:text-white"
              : "bg-red text-white hover:bg-white hover:text-red"
          } transition-all duration-200 ease-smooth ${className}`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};
