import MainViewContentArea from "components/organisms/MainViewContentArea";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <MainLayoutTemplate
      page="コンテンツ"
      description="コンテンツ表示画面です。"
    >
      <MainViewContentArea />
    </MainLayoutTemplate>
  );
};

export default HomePage;
