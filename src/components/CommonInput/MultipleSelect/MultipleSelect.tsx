import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { MultipleSelectWarraper } from "./styled";
import { OptionType, MultipleSelectProps } from "../CommonInputType";
import { getProjecTag } from "../../../service/service";

const MultipleSelect: React.FC<MultipleSelectProps> = (props) => {
  /** OPTIONAL PARAMS
   * @param {Array} value       - dùng để chọn những option đã chọn
   * @param {function} onChange - dùng để chọn options
   * @param {boolean} disabled  - dùng để disable select
   */
  const { value, disabled, onChange, ...rest } = props;
  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const fetchedOptions = await fetchData();
      setOptions(fetchedOptions);
    };

    getOptions();
  }, []);

  const fetchData = async (): Promise<OptionType[]> => {
    try {
      const response = await getProjecTag();
      return response.map((item: OptionType) => ({
        label: item.label,
        value: item.value,
      }));
    } catch (error) {
      console.error("Error fetching options:", error);
      return [];
    }
  };

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
        {...rest}
      />
    </MultipleSelectWarraper>
  );
};

export default MultipleSelect;
