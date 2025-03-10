import React from "react";
import { DatePicker } from "antd";
import { DatePickerWarraper } from "./styled";
import { DateIcon } from "../../../Icon";
import { CloseOutlined } from "@ant-design/icons";
import { DATE_FORMAT } from "../../../helper/contant";
import dayjs, { Dayjs } from "dayjs";
import { DatePickerFormikProps } from "../CommonInputType";

const DatePickerComponent: React.FC<DatePickerFormikProps> = (props) => {
  /** OPTIONAL PARAMS
   *  @param {boolean} disabled   - dùng để vô hiệu hóa việc nhập date
   *  @param {string} placeholder - dùng để thay đổi placeholder cho datepicker
   *  @param {string} dateValue   - dùng để thay đổi date hien thi trong datepicker
   *  @param {string} fieldName   - dùng để thay đổi name cho input
   *  @param {any} formik         - là props của Formik
   */
  const { disabled, placeholder, dateValue, fieldName, formik, ...rest } =
    props;
  const name = fieldName ?? "";

  /** FUNCTIONS: handleChage
   * @param  {Dayjs }date         - dùng để thay đổi date thành string để lưu giá trị với formik
   */
  const handleChange = (date: Dayjs) => {
    if (date) {
      const formattedDate = date.format(DATE_FORMAT);
      formik?.setFieldValue(name, formattedDate);
    } else {
      formik?.setFieldValue(name, "");
    }
  };

  /** FUNCTIONS: handleBlur
   * có tác dụng bắt sự kiện  đã click vào datepicker
   */
  const handleBlur = () => {
    formik?.setFieldTouched(name, true);
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
