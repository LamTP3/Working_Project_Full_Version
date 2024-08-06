import React from "react";
import { LabelProps } from "./LabelType";
import { Warraper } from "./styled";

const LabelComponent: React.FC<LabelProps> = ({
  label,
  disabled,
  required,
}) => {
  return (
    <Warraper $disabled={disabled}>
      <div className="label-color">
        <span>
          {label}
          {required && <span className="required-asterisk">*</span>}
        </span>
      </div>
    </Warraper>
  );
};

export default LabelComponent;
