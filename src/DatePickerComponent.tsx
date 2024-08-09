import React, { useEffect } from "react";
import { DatePicker } from "antd";
import { useField, useFormikContext } from "formik";
import dayjs from "dayjs";
interface DatePickerComponentProps {
  label: string;
  name: string;
  [key: string]: any;
}
const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  label,
  name,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  const { setFieldTouched } = useFormikContext();
  const handleChange = (value: any) => {
    setValue(value ? dayjs(value).format("YYYY-MM-DD") : "");
    setFieldTouched(name, true);
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  useEffect(() => {
    if (field.value === "" && meta.touched) {
      // Nếu giá trị rỗng và trường đã được chạm, thiết lập lỗi nếu cần
      setFieldTouched(name, true);
    }
  }, [field.value, meta.touched, name, setFieldTouched]);

  return (
    <div>
      <h1> 123</h1>
      <h1> {meta.touched ? "true" : "false"}</h1>
      <h1> {meta.error ? "true" : "false"}</h1>
      <label>{label}</label>
      <DatePicker
        {...props}
        value={field.value ? dayjs(field.value) : null}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{label} is required</div>
      ) : null}
    </div>
  );
};

export default DatePickerComponent;
