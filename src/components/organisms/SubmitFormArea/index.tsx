import { FormEvent } from "react";
import { InputField } from "types";
import PrimaryButton from "components/atoms/PrimaryButton";
import TextInput from "components/atoms/TextInput";

interface SubmitFormAreaProps {
  buttonText: string;
  inputFields: InputField[];
  validationError: any;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const SubmitFormArea = (props: SubmitFormAreaProps) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.onSubmit(e);
  };

  return (
    <form
      className="text-center mt-6 mx-auto max-w-full"
      onSubmit={handleOnSubmit}
    >
      {props.inputFields
        ? props.inputFields.map((field) => (
            <TextInput
              key={field.label}
              className="mb-6"
              error={
                props.validationError
                  ? props.validationError[field.accessor]
                  : undefined
              }
              label={field.label}
              defaultValue={field.defaultValue}
              multiline={field.type === "multiline"}
              handleBlur={field.handleBlur}
              password={field.password}
            />
          ))
        : null}
      <PrimaryButton type="submit" className="mt-4 rounded-sm" color="indigo">
        {props.buttonText}
      </PrimaryButton>
    </form>
  );
};

export default SubmitFormArea;
