import { NextSeo } from "next-seo";
import { ReactNode } from "react";

interface LoginLayoutTemplateProps {
  children: ReactNode;
}

const LoginLayoutTemplate = (props: LoginLayoutTemplateProps) => {
  return (
    <>
      <NextSeo
        title={"最速ブランド転売攻略 - ログイン画面"}
        description={"ログイン画面です。"}
      />
      <main className="flex flex-col justify-center items-center min-h-screen">
        {props.children}
      </main>
    </>
  );
};

export default LoginLayoutTemplate;
