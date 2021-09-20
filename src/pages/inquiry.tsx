import { NextPage } from "next";
import SubmitFormArea from "components/organisms/SubmitFormArea";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import { FormEvent, useState } from "react";
import { InputField } from "types";
import { validationEmail, validationEmptyValue } from "validations";
import useSWR from "swr";

interface Validations {
  name: string;
  email: string;
  description: string;
}

const InquiryPage: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [validationError, setValidationError] =
    useState<Validations>(undefined);

  const inputFields: InputField[] = [
    {
      accessor: "name",
      label: "名前",
      defaultValue: name,
      handleBlur: (v: string) => setName(v),
      type: "oneLine",
    },
    {
      accessor: "email",
      label: "メールアドレス",
      defaultValue: email,
      handleBlur: (v: string) => setEmail(v),
      type: "oneLine",
    },
    {
      accessor: "description",
      label: "お問い合わせ内容",
      defaultValue: description,
      handleBlur: (v: string) => setDescription(v),
      type: "multiline",
    },
  ];

  const validationInputValue = () => {
    const validations: Validations = {
      name: undefined,
      email: undefined,
      description: undefined,
    };
    validations.name = validationEmptyValue(name, "名前");
    if (email) {
      validations.email = validationEmail(email);
    } else {
      validations.email = validationEmptyValue(email, "メールアドレス");
    }
    validations.description = validationEmptyValue(
      description,
      "お問い合わせ内容"
    );

    if (Object.values(validations).some((e) => e !== undefined)) {
      setValidationError(validations);

      return false;
    }

    return true;
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!validationInputValue()) return;

    // SendGridUseCase.sendMail({
    //   to: "mima.moto1009@gmail.com",
    //   from: email,
    //   subject: "お問い合わせを受け付けました。",
    //   text: description,
    // });
  };

  return (
    <MainLayoutTemplate
      page="お問い合わせ"
      description="お問い合わせページです。"
    >
      <SubmitFormArea
        buttonText="送信する"
        inputFields={inputFields}
        validationError={validationError}
        onSubmit={handleOnSubmit}
      />
    </MainLayoutTemplate>
  );
};

export default InquiryPage;
