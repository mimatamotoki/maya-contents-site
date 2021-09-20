import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { InputField } from "types";
import SubmitFormArea from "components/organisms/SubmitFormArea";
import { validationEmail, validationEmptyValue } from "validations";
import LoginIcon from "assets/Login";

interface Validations {
  username: string;
  email: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationError, setValidationError] =
    useState<Validations>(undefined);

  const inputFields: InputField[] = [
    {
      accessor: "email",
      label: "メールアドレス",
      defaultValue: email,
      handleBlur: (v: string) => setEmail(v),
      type: "oneLine",
    },
    {
      accessor: "password",
      label: "パスワード",
      defaultValue: password,
      handleBlur: (v: string) => setPassword(v),
      type: "oneLine",
    },
  ];

  const validationInputValue = () => {
    const validations: Validations = {
      username: undefined,
      email: undefined,
      password: undefined,
    };
    if (email) {
      validations.email = validationEmail(email);
    } else {
      validations.email = validationEmptyValue(email, "メールアドレス");
    }
    validations.password = validationEmptyValue(password, "パスワード");

    if (Object.values(validations).some((e) => e !== undefined)) {
      setValidationError(validations);

      return false;
    }

    return true;
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!validationInputValue()) return;
    console.log();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-3xl mb-5 flex items-center">
        ログイン
        <LoginIcon className="ml-2" />
      </h2>
      <SubmitFormArea
        buttonText="ログイン"
        inputFields={inputFields}
        validationError={validationError}
        onSubmit={handleOnSubmit}
      />
    </div>
  );
};

export default LoginPage;
