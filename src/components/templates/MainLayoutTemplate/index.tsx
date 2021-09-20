import FooterBar from "components/atoms/FooterBar";
import HeaderBar from "components/molecules/HeaderBar";
import { ReactNode, useReducer } from "react";
import { NextSeo } from "next-seo";
import AccordionContent from "components/molecules/AccordionContent";
import MenuCard from "components/molecules/MenuCard";
import PrimaryButton from "components/atoms/PrimaryButton";
import Dialog from "components/atoms/Dialog";
import { useRouter } from "next/dist/client/router";

interface MainLayoutTemplateProps {
  children: ReactNode;
  description: string;
  page: string;
}

const ACCORDION_ITEMS = [
  {
    title: "はじめに",
    items: [
      {
        label: "学習するにあたって",
        id: 1,
        link: null,
      },
      {
        label: "ブランド転売とは",
        id: 2,
        link: null,
      },
      {
        label: "アプリ以外で用意してほしいもの",
        id: 3,
        link: "https://note.com/preview/nf062b7e72cd5?prev_access_key=99e897575d23f8c38aba921db8bf5e1e",
      },
    ],
  },
  {
    title: "セカスト攻略",
    items: [
      {
        label: "セカオンの使い方",
        id: 1,
        link: "https://note.com/preview/n34b76c959999?prev_access_key=182e4e830d67f346cfedd02122d33f97",
      },
      {
        label: "セカストオンライン勉強法",
        id: 2,
        link: "https://note.com/preview/n71ff64fc9a92?prev_access_key=8b11898e38c1b7140b2fbd8d21fcb9e3",
      },
      {
        label: "セカストオンライン10%オフで購入",
        id: 3,
        link: "https://note.com/preview/n1e3ef65de684?prev_access_key=574415435ac662ef9b6d2fb6265e8b92",
      },
      {
        label: "セカストで10%オフが切れた時",
        id: 4,
        link: "https://note.com/preview/n99b7a7f1e856?prev_access_key=ca495993b91a3bfe04a22bd3bc3c8b4f",
      },
    ],
  },
  {
    title: "メルカリ攻略",
    items: [
      {
        label: "写真の撮り方",
        id: 1,
        link: "https://note.com/preview/n211b6ad830ed?prev_access_key=f9e3ffb0c1810ab109be151ee9114cda",
      },
      {
        label: "メルカリ出品編",
        id: 2,
        link: "https://note.com/preview/na4b6ec4886bd?prev_access_key=1fe88c5031c64081387b24986a3236b7",
      },
      {
        label: "リサーチ方法",
        id: 3,
        link: "https://note.com/preview/n96b065ffe655?prev_access_key=2ab4cd825aeac85dcd48142f2f2e542a",
      },
      {
        label: "リサーチ2",
        id: 4,
        link: "https://note.com/preview/nf4129c58ced7?prev_access_key=e1e6f23968abd53cbcf49898b1f05cf7",
      },
      {
        label: "リサーチ方法（究極）",
        id: 5,
        link: "https://note.com/preview/nf5d0be802df1?prev_access_key=e4fe1e973dfd966a50beaf77db1eddf4",
      },
    ],
  },
  {
    title: "ヤフオク攻略",
    items: [
      {
        label: "ヤフオク攻略（特徴）",
        id: 1,
        link: "https://note.com/preview/n10cfdc4cd04d?prev_access_key=646a6a3823ce1783d90ac568c42b153a",
      },
      {
        label: "ヤフオクリサーチ",
        id: 2,
        link: "https://note.com/preview/n9c6ff2fe1a47?prev_access_key=d3e9d39d4b45b1f9a5bc7e70956c8454",
      },
    ],
  },
  {
    title: "リペア",
    items: [
      {
        label: "はじめに",
        id: 1,
        link: "https://note.com/preview/nfec2bb6d0740?prev_access_key=413cc22731910fa3c6e0bfff84bb7ae5",
      },
    ],
  },
];

const ACCORDION_VIDEO_ITEMS = [
  {
    title: "",
    items: [
      {
        label: "",
        id: 1,
        link: "",
      },
    ],
  },
];

const MainLayoutTemplate = (props: MainLayoutTemplateProps) => {
  const [open, handleOpen] = useReducer((checked) => !checked, false);
  const router = useRouter();
  const contents = ACCORDION_ITEMS;
  const video_contents = ACCORDION_VIDEO_ITEMS;

  const displayContentMenu =
    router.pathname !== "/inquiry" && router.pathname !== "/member/info/edit";

  const handleDialogClose = () => {
    handleOpen();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        buttonText="ログアウトする"
        title="ログアウトをしますか？"
      />
      <NextSeo
        title={`最速ブランド転売攻略 - ${props.page}`}
        description={props.description}
      />
      <main className="bg-gray-100 min-h-screen flex justify-between flex-col">
        <HeaderBar />
        <div className="flex-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-5">
          {props.children}
          {displayContentMenu ? (
            <div className="flex-1 mt-8 xl:mt-0">
              <MenuCard className="mb-3" title="コンテンツ一覧">
                {contents.map((content) => (
                  <AccordionContent
                    key={content.title}
                    items={content.items}
                    title={content.title}
                  />
                ))}
              </MenuCard>
              <MenuCard className="mb-3" title="動画コンテンツ一覧">
                {video_contents.map((content) => (
                  <AccordionContent
                    key={content.title}
                    items={content.items}
                    title={content.title}
                  />
                ))}
              </MenuCard>
              <MenuCard className="mb-8" title="その他">
                <PrimaryButton small onClick={handleOpen}>
                  ログアウト
                </PrimaryButton>
              </MenuCard>
            </div>
          ) : null}
        </div>
        <FooterBar />
      </main>
    </>
  );
};

export default MainLayoutTemplate;