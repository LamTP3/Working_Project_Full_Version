import {
  ButtonProps,
  CheckboxProps,
  DatePickerProps,
  InputNumberProps,
  SelectProps,
  RadioGroupProps,
  UploadProps as AntdUploadProps,
} from "antd";
import { FormikProps } from "formik";

/**
 * Props cho component Button
 */
type BackgroundColor = "Gradient" | "Gradient_Danger" | "Gradient_Default";

export interface ButtonCompProps extends ButtonProps {
  background_color: BackgroundColor;
  button_content: string;
  arrow_icon: boolean;
  width?: string;
  onClick?: () => void;
}

/**
 * Props cho component Checkbox
 */
export interface CheckBoxProps extends CheckboxProps {
  optionsData: { label: string; value: string; component?: React.ReactNode }[];
  useCricle?: boolean;
  onChange?: (...args: any) => void;
  allValues?: string[];
}

/**
 * Props cho component DatePicker
 */

export interface DatePickerFormikProps extends DatePickerProps {
  formik?: FormikProps<any>;
  fieldName?: string;
  dateValue?: string;
}

/**
 * Props cho component InputNumber trong folder src/components/CommonInput
 */

export interface InterNumberCompProp extends InputNumberProps {
  unit?: string;
}

/**
 *  Props cho component Label
 */
export interface LabelProps {
  label: string;
  disabled?: boolean;
  required?: boolean;
}

/**
 * Props cho component MultipleSelect
 */

export type OptionType = {
  label: string;
  value: string;
};

export interface MultipleSelectProps extends SelectProps<string[]> {
  value?: string[];
  onChange?: (value: string[]) => void;
}

/**
 * Props cho component Radio
 */

export interface RadioComponentProps extends RadioGroupProps {
  options: { label: string; value: string }[];
  valueChoose?: string;
}

/**
 * Props cho component UploadFile
 */
export interface UploadFileProps extends AntdUploadProps {
  label: string;
  height?: string;
  width?: string;
  value?: string;
}
