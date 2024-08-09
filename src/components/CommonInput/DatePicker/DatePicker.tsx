import React from "react";
import { DatePicker, DatePickerProps } from "antd";
import { DatePickerWarraper } from "./styled";
import { DateIcon } from "../../../Icon";
import { CloseOutlined } from "@ant-design/icons";
import { DATE_FORMAT } from "../../../helper/contant";
import dayjs, { Dayjs } from "dayjs";
import { FormikProps } from "formik";

interface DatePickerFormikProps extends DatePickerProps {
  formik?: FormikProps<any>;
  fieldName: string;
  dateValue?: string;
}
const DatePickerComponent: React.FC<DatePickerFormikProps> = (props) => {
  const { disabled, placeholder, dateValue, fieldName, formik, ...rest } =
    props;
  const handleChange = (date: Dayjs) => {
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
        placeholder={placeholder ?? DATE_FORMAT}
        suffixIcon={<DateIcon />}
        format={DATE_FORMAT}
        value={dateValue ? dayjs(dateValue) : null}
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
