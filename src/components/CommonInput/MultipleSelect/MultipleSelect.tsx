import React, { useEffect, useState } from "react";
import { Select, SelectProps } from "antd";
import axios from "axios";
import { MultipleSelectWarraper } from "./styled";

// Định nghĩa kiểu dữ liệu
type OptionType = {
  label: string;
  value: string;
};

// Hàm lấy dữ liệu
const fetchData = async (): Promise<OptionType[]> => {
  try {
    const response = await axios.get("http://localhost:9999/Project_Tag");
    return response.data.map((item: OptionType) => ({
      label: item.label,
      value: item.value,
    }));
  } catch (error) {
    console.error("Error fetching options:", error);
    return [];
  }
};

interface MultipleSelectProps extends SelectProps<string[]> {
  value?: string[];
  onChange?: (value: string[]) => void;
  onBlur?: () => void;
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  value,
  disabled,
  onChange,
  onBlur,
  ...props
}) => {
  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const fetchedOptions = await fetchData();
      setOptions(fetchedOptions);
    };

    getOptions();
  }, []);

  return (
    <MultipleSelectWarraper $disabled={disabled}>
      <Select
        mode="multiple"
        style={{ width: "100%", height: "40px" }}
        placeholder="Select one or more tags"
        onChange={onChange}
        options={options}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        {...props}
      />
    </MultipleSelectWarraper>
  );
};

export default MultipleSelect;
