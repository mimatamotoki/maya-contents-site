import ExclamationCircle from "assets/ExclamationCircle";
import classNames from "classnames";
import { FocusEvent } from "react";

interface TextInputProps {
  className?: string;
  error: string | undefined;
  label?: string;
  defaultValue?: string;
  multiline?: boolean;
  handleBlur?: (value: string) => void;
  password?: boolean;
}

const TextInput = (props: TextInputProps) => {
  const handleOnBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.handleBlur(e.currentTarget.value);
  };
  const inputStyle =
    "border border-gray-300 w-96 max-w-full rounded-sm mt-1 text-sm p-1";

  return (
    <div className={classNames("max-w-90 mx-auto", props.className)}>
      {props.label && <span className="text-sm block">{props.label}</span>}
      {props.multiline ? (
        <textarea
          className={inputStyle}
          defaultValue={props.defaultValue}
          onBlur={handleOnBlur}
          rows={4}
        />
      ) : (
        <input
          type={props.password ? "password" : "text"}
          className={inputStyle}
          defaultValue={props.defaultValue}
          onBlur={handleOnBlur}
        />
      )}
      {props.error && (
        <p className="flex text-red-500 text-xs w-96 items-center mt-1 mx-auto">
          <ExclamationCircle /> {`${props.error}`}
        </p>
      )}
    </div>
  );
};

export default TextInput;
