import XIcon from "assets/XIcon";
import classNames from "classnames";
import PrimaryButton from "../PrimaryButton";

interface DialogProps {
  buttonText: string;
  title: string;
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

const Dialog = (props: DialogProps) => {
  return (
    <div
      className={classNames(
        "fixed h-full w-screen bg-gray-800 bg-opacity-80 z-50 top-0 left-0",
        props.open ? "block" : "hidden"
      )}
    >
      <div className="absolute left-1/2 top-1/4 w-96 h-40 max-w-90 bg-gray-200 translate-x-50 opacity-100 p-4 pt-3 rounded-sm">
        <header className="flex justify-end">
          <button onClick={props.onClose}>
            <XIcon />
          </button>
        </header>
        <div className="mt-2 ml-2 mb-8 text-center">{props.title}</div>
        <div className="flex justify-around">
          {props.onClose ? (
            <PrimaryButton color="white" small onClick={props.onClose}>
              キャンセル
            </PrimaryButton>
          ) : null}
          {props.onClick ? (
            <PrimaryButton color="indigo" small onClick={props.onClick}>
              {props.buttonText}
            </PrimaryButton>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
