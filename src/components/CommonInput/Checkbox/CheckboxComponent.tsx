import React from "react";
import { Checkbox } from "antd";
import { CheckBoxProps } from "./ChecboxType";
import { CheckboxWarraper } from "./styled";

const CheckboxComponent: React.FC<CheckBoxProps> = ({
  optionsData,
  useCricle,
  onChange,
  allValues,
  height,
  disabled,
  ...props
}) => {
  const defaultValues = allValues ? allValues : [optionsData[0]?.value];
  return (
    <>
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
          {...props}
        />
      </CheckboxWarraper>
    </>
  );
};

export default CheckboxComponent;
