import React from "react";
import { Checkbox } from "antd";
import { CheckBoxProps } from "../CommonInputType";
import { CheckboxWarraper } from "./styled";

const CheckboxComponent: React.FC<CheckBoxProps> = (props) => {
  /** REQUIRE PARAMS
   *
   * @param {object} optionsData  - nhận kiểu "object" có 2 thuộc tính label và value đều kiểu "string" và dùng để hiển thị checkbox
   */

  /** OPTIONAL PARAMS
   * @param {boolean} useCricle   - dùng để hiển thị border hình tròn
   * @param {boolean} height      - dây là option param đặc biệt dùng cho section Capital
   *                                để set khoảng cách từ trên xuống dưới giữa từng checkbox
   * @param {function} onChange   - dùng để thay đổi value của checkbox
   * @param {Array} allValues     - nhận kiểu "array" dùng để hiển thị checkbox đã được check
   */
  const {
    optionsData,
    useCricle,
    onChange,
    allValues,
    height,
    disabled,
    ...rest
  } = props;
  const defaultValues = allValues ?? [optionsData[0]?.value];

  return (
    <CheckboxWarraper
      $circle={useCricle}
      $heightElement={height}
      $disabled={disabled}
    >
      <Checkbox.Group
        options={optionsData}
        defaultValue={defaultValues}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
    </CheckboxWarraper>
  );
};

export default CheckboxComponent;
