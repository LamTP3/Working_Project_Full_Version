import React from "react";
import { DatePicker, DatePickerProps } from "antd";
import { DatePickerWarraper } from "./styled";
import { DateIcon } from "../../../Icon";
import { CloseOutlined } from "@ant-design/icons";
import { dateFormat } from "../../../helper/contant";
import dayjs from "dayjs";
import { FormikProps } from "formik";
interface DatePickerFormikProps extends DatePickerProps {
  formik?: FormikProps<any>;
  fieldName: string;
}
const DatePickerComponent: React.FC<DatePickerFormikProps> = (props) => {
  const { disabled, placeholder, value, formik, fieldName, ...rest } = props;

  const handleChange = (date: any) => {
    if (date) {
      const formattedDate = date.format("MM/DD/YYYY HH:mm");
      formik?.setFieldValue(fieldName, formattedDate);
    } else {
      formik?.setFieldValue(fieldName, "");
    }
  };

  const handleBlur = () => {
    formik?.setFieldTouched(fieldName, true);
  };
  return (
    <DatePickerWarraper $disabled={disabled}>
      <DatePicker
        showTime
        placeholder={placeholder ?? "MM/dd/yyyy HH:mm"}
        suffixIcon={<DateIcon />}
        format={dateFormat}
        value={value ? dayjs(value) : null}
        onBlur={handleBlur}
        onChange={handleChange}
        allowClear={{ clearIcon: <CloseOutlined /> }}
        disabled={disabled}
        {...rest}
      />
    </DatePickerWarraper>
  );
};

export default DatePickerComponent;
