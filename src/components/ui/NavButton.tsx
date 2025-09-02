import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type NavButtonProps = PropsWithChildren<{
  link: string;
}>;

export const NavButton = ({ children, link }: NavButtonProps) => {
  return (
    <Link to={link}>
      <div className="border-[1px] border-red rounded-3xl px-8 py-3 w-fit font-extralight hover:transition-colors hover:duration-500 hover:bg-red hover:text-white ease-in-out">
        {children}
      </div>
    </Link>
  );
};
