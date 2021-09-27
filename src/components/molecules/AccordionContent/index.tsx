import ChevronBottom from "assets/ChevronBottom";
import classNames from "classnames";
import ContentItem from "components/atoms/ContentItem";
import { useReducer, useRef } from "react";
import { Item } from "types";

interface AccordionContentProps {
  items: Item[];
  title: string;
}

const AccordionContent = (props: AccordionContentProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const getHeight = () => {
    const height = itemRef.current.style.height;
    const isClose = height === "" || height === "0px";
    if (isClose) return itemRef.current.children[0].clientHeight;

    return 0;
  };

  const [isOpenHeight, toggleIsOpenHeight] = useReducer(getHeight, 0);

  return (
    <ul className="p-4 list-none">
      <li>
        <header
          className="cursor-pointer p-2 border-t-2 border-b-2 flex justify-between items-center"
          onClick={toggleIsOpenHeight}
        >
          <p>{props.title}</p>
          <ChevronBottom
            className={classNames(
              "rotate-animation",
              isOpenHeight !== 0 && "open-rotate"
            )}
          />
        </header>
        <div
          ref={itemRef}
          className="overflow-hidden height-animation"
          style={{ height: isOpenHeight }}
        >
          <ul>
            <li>
              {props.items.map((item) => (
                <ContentItem
                  key={item.label}
                  link={item.link}
                  isContent
                  text={item.label}
                  toggleIsOpenHeight={toggleIsOpenHeight}
                />
              ))}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default AccordionContent;
