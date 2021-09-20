export interface Item {
  label: string;
  id: number;
  link: string;
}

export interface InputField {
  accessor: string;
  label: string;
  defaultValue: string;
  handleBlur: (value: string) => void;
  type: "oneLine" | "multiline";
}
