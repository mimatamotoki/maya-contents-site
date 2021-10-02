import BarItemButton from "components/atoms/BarItemButton";

const HEADER_BAR_ITEMS = [
  {
    label: "ホーム",
    link: "/main",
  },
  {
    label: "お問い合わせ",
    link: "/inquiry",
  },
  {
    label: "会員情報変更",
    link: "/member/info/edit",
  },
];

const HeaderBar = () => {
  return (
    <ul className="flex flex-col sm:flex-row sm:w-full">
      {HEADER_BAR_ITEMS.map((item, idx) => (
        <BarItemButton key={idx} link={item.link} text={item.label} />
      ))}
    </ul>
  );
};

export default HeaderBar;
