import { ReactNode } from "react";

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea = (props: ContentAreaProps) => {
  return (
    <div className="px-8 sm:px-14 pt-4 pb-6 max-w-4xl tracking-wider leading-7">
      {props.children}
    </div>
  );
};

export default ContentArea;
