import ContentArea from "components/atoms/ContentArea";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type ContentPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ContentPage: NextPage<ContentPageProps> = ({
  markdown,
}: ContentPageProps) => {
  return (
    <MainLayoutTemplate page="コンテンツ" description="コンテンツ">
      <ContentArea>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </ContentArea>
    </MainLayoutTemplate>
  );
};

export default ContentPage;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), `src/contents/content${context.params.id}.md`),
    "utf-8"
  );
  return {
    props: { markdown },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};
