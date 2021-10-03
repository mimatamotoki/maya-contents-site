import SubmitFormArea from "components/organisms/SubmitFormArea";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import { auth } from "../../../firebase/firebase";
import { NextPage } from "next";
import { useState } from "react";
import { InputField } from "types";
import { validationEmail, validationEmptyValue } from "validations";
import {
  EmailAuthProvider,
  ProviderId,
  reauthenticateWithCredential,
  SignInMethod,
  updateEmail,
  User,
} from "@firebase/auth";
import { useRouter } from "next/dist/client/router";

interface Validations {
  email: string;
}

const MemberInfoEditPage: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationError, setValidationError] =
    useState<Validations>(undefined);
  const [currentUser, setCurrentUser] = useState<User>(auth.currentUser);

  const inputFields: InputField[] = [
    {
      accessor: "email",
      label: "変更後のメールアドレス",
      defaultValue: email,
      handleBlur: (value: string) => setEmail(value),
      type: "oneLine",
    },
    {
      accessor: "password",
      label: "パスワード",
      defaultValue: password,
      handleBlur: (value: string) => setPassword(value),
      type: "oneLine",
      password: true,
    },
  ];

  const validationInputValue = () => {
    const validations: Validations = {
      email: undefined,
    };
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

  const handleOnSubmit = async () => {
    if (!validationInputValue()) return;

    const credential = EmailAuthProvider.credential(
      currentUser.email,
      password
    );
    await reauthenticateWithCredential(currentUser, credential);
    await updateEmail(currentUser, email)
      .then(() => {
        alert("メールアドレスを更新しました。");
        router.push("/main");
      })
      .catch((err) => {
        alert("メールアドレスの更新に失敗しました。");
        console.log(err);
      })
      .finally(() => {
        setValidationError(undefined);
      });
  };

  return (
    <MainLayoutTemplate
      page="会員情報変更"
      description="会員情報変更ページです。"
    >
      <div className="mx-auto flex flex-col items-center">
        <span className="text-sm block mb-2">現在のメールアドレス</span>
        {currentUser ? <p className="text-xl">{currentUser.email}</p> : null}
        <SubmitFormArea
          buttonText="変更する"
          inputFields={inputFields}
          validationError={validationError}
          onSubmit={handleOnSubmit}
        />
      </div>
    </MainLayoutTemplate>
  );
};

export default MemberInfoEditPage;
