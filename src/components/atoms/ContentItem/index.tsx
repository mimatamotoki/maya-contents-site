import { DispatchWithoutAction } from "react";
import Link from "next/link";

interface ContentItemProps {
  link?: string;
  isContent?: boolean;
  text: string;
  toggleIsOpenHeight?: DispatchWithoutAction;
}

const ContentItem = (props: ContentItemProps) => {
  const handleClick = () => {
    props.toggleIsOpenHeight();
  };

  return (
    <Link href={props.link}>
      <a
        className="px-4 py-2 box-border border text-sm block"
        onClick={props.isContent ? handleClick : (f) => f}
      >
        {props.text}
      </a>
    </Link>
  );
};

export default ContentItem;
