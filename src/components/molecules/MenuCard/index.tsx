import classNames from "classnames";
import { ReactNode } from "react";

interface MenuCardProps {
  children: ReactNode;
  className?: string;
  title: string;
}

const MenuCard = (props: MenuCardProps) => {
  return (
    <div
      className={classNames(
        "border px-2 py-4 shadow-md w-80 max-w-xs mx-auto",
        props.className
      )}
    >
      <h3 className="text-gray-200 text-sm mx-auto py-1 text-center bg-gradient-to-b from-indigo-600 to-indigo-700">
        {props.title}
      </h3>
      <div>{props.children}</div>
    </div>
  );
};

export default MenuCard;
