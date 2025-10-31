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
          className={`p-4 rounded-xl ${
            whiteButton
              ? "bg-white text-textGray hover:bg-red hover:text-white"
              : "bg-red text-white hover:bg-white hover:text-red"
          } text-lg border-2 hover:border-2 hover:border-red transition-color ease-in-out duration-500 ${className}`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};
