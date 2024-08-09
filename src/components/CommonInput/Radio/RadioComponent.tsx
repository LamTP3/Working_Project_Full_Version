import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { StyledRadio } from "./styled";
import { RadioComponentProps } from "../CommonInputType";

const RadioComponent: React.FC<RadioComponentProps> = (props) => {
  /** REQUIRE PARAMS
   * @param {Array} options       - dùng để hiện những option được chọn
   */

  /**OPTIONAL PARAMS
   * @param {string} valueChoose  - dùng để 1 option  nếu đã có giá trị lưu trong json
   */

  const { options, valueChoose, ...rest } = props;
  const [value, setValue] = useState<string>(valueChoose ?? options[0].value);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <StyledRadio $diabled={props.disabled}>
      <Radio.Group onChange={onChange} value={value} {...rest}>
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </StyledRadio>
  );
};

export default RadioComponent;
