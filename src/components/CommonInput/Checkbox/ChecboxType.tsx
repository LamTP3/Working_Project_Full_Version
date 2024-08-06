import { CheckboxProps } from "antd";

export interface CheckBoxProps extends CheckboxProps {
  optionsData: { label: string; value: string }[];
  useCricle: boolean;
  height?: boolean;
  onChange?: (...args: any) => void;
  allValues?: string[];
}
