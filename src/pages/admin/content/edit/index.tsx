import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const DynamicSimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const ContentEdit = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    console.log(markdown);
  }, [markdown]);
  return (
    <div>
      <DynamicSimpleMDE onChange={(e) => setMarkdown(e)} />
    </div>
  );
};

export default ContentEdit;
