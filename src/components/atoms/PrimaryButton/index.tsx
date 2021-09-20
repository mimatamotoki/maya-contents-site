import classNames from "classnames";
import { MouseEventHandler, ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  color?: "indigo" | "white";
  small?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const color =
    props.color === "indigo"
      ? "bg-gradient-to-b from-indigo-600 to-indigo-700 text-gray-200 hover:from-indigo-500 hover:to-indigo-600"
      : props.color === "white"
      ? "border border-gray-400 box-border"
      : "";
  const textSize = props.small ? "text-sm" : "text-base";

  return (
    <button
      type={props.type}
      className={classNames(
        "px-4 py-2 border-t",
        textSize,
        color,
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
