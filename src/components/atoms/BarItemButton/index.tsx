import ChevronRight from "assets/ChevronRight";
import { useRouter } from "next/dist/client/router";

interface BarItemButtonProps {
  link: string;
  text: string;
}

const BarItemButton = (props: BarItemButtonProps) => {
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(props.link);
  };

  return (
    <li
      className="text-gray-300 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-indigo-600 to-indigo-700 cursor-pointer sm:h-14 sm:bg-gradient-to-r sm:flex-1"
      onClick={handleLinkClick}
    >
      {props.text}
      <ChevronRight />
    </li>
  );
};

export default BarItemButton;
