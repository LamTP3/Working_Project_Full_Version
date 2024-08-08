import React, { useState } from "react";
import type { RadioChangeEvent, RadioGroupProps } from "antd";
import { Radio } from "antd";
import { StyledRadio } from "./styled";

interface RadioComponentProps extends RadioGroupProps {
  options: { label: string; value: string }[];
  valueChoose?: string;
}

const RadioComponent: React.FC<RadioComponentProps> = ({
  options,
  valueChoose,
  ...props
}) => {
  const [value, setValue] = useState<string>(valueChoose ?? options[0].value);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <StyledRadio $diabled={props.disabled}>
      <Radio.Group onChange={onChange} value={value} {...props}>
        {options.map((option, index) => (
          <Radio key={index} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </StyledRadio>
  );
};

export default RadioComponent;
