import React from "react";
import { DatePicker, DatePickerProps } from "antd";
import { DatePickerWarraper } from "./styled";
import { DateIcon } from "../../../Icon";
import { CloseOutlined } from "@ant-design/icons";
import { dateFormat } from "../../../helper/util";
import dayjs from "dayjs";

const DatePickerComponent: React.FC<DatePickerProps> = (props) => {
  const { disabled, placeholder, value, onChange, onBlur, ...rest } = props;

  return (
    <DatePickerWarraper $disabled={disabled}>
      <DatePicker
        showTime
        placeholder={placeholder || "MM/dd/yyyy HH:mm"}
        suffixIcon={<DateIcon />}
        format={dateFormat}
        value={value ? dayjs(value) : null}
        onBlur={onBlur}
        onChange={onChange}
        allowClear={{ clearIcon: <CloseOutlined /> }}
        disabled={disabled}
        {...rest}
      />
    </DatePickerWarraper>
  );
};

export default DatePickerComponent;
