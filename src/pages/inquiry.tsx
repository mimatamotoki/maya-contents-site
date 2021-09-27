import { NextPage } from "next";
import SubmitFormArea from "components/organisms/SubmitFormArea";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import { FormEvent, useState } from "react";
import { InputField } from "types";
import { validationEmail, validationEmptyValue } from "validations";
import { useMemo } from "react";
import { useRouter } from "next/dist/client/router";
import Dialog from "components/atoms/Dialog";

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
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const inputFields: InputField[] = useMemo(
    () => [
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
    ],
    [name, email, description]
  );

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

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!validationInputValue()) return;

    const res = await fetch("/api/sendGridAPI", {
      body: JSON.stringify({
        email: email,
        name: name,
        message: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status === 200) {
      setOpen(true);
    }
  };

  const handleDialogClick = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <MainLayoutTemplate
      page="お問い合わせ"
      description="お問い合わせページです。"
    >
      <Dialog
        open={open}
        onClick={handleDialogClick}
        title={"お問い合わせ成功しました。"}
        buttonText={"OK"}
      />
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
