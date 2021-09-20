import SubmitFormArea from "components/organisms/SubmitFormArea";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { InputField } from "types";
import { validationEmail, validationEmptyValue } from "validations";

interface Validations {
  name: string;
  email: string;
}

const MemberInfoEditPage: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [validationError, setValidationError] =
    useState<Validations>(undefined);

  const inputFields: InputField[] = [
    {
      accessor: "name",
      label: "名前",
      defaultValue: name,
      handleBlur: (value: string) => setName(value),
      type: "oneLine",
    },
    {
      accessor: "email",
      label: "メールアドレス",
      defaultValue: email,
      handleBlur: (value: string) => setEmail(value),
      type: "oneLine",
    },
  ];

  const validationInputValue = () => {
    const validations: Validations = {
      name: undefined,
      email: undefined,
    };
    validations.name = validationEmptyValue(name, "名前");
    if (email) {
      validations.email = validationEmail(email);
    } else {
      validations.email = validationEmptyValue(email, "メールアドレス");
    }

    if (Object.values(validations).some((e) => e !== undefined)) {
      setValidationError(validations);

      return false;
    }
    return true;
  };

  const handleOnSubmit = () => {
    if (!validationInputValue()) return;

    console.log({
      name,
      email,
    });
  };

  return (
    <MainLayoutTemplate
      page="会員情報変更"
      description="会員情報変更ページです。"
    >
      <SubmitFormArea
        buttonText="変更する"
        inputFields={inputFields}
        validationError={validationError}
        onSubmit={handleOnSubmit}
      />
    </MainLayoutTemplate>
  );
};

export default MemberInfoEditPage;
