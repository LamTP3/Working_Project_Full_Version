import React from "react";
import { LabelProps } from "../CommonInputType";
import { Warraper } from "./styled";

const LabelComponent: React.FC<LabelProps> = (props) => {
  /** REQUIRE PARAMS
   *
   *  @param {string} label    - dùng để hiển thị nội dung content bên trong Label Component
   */

  /** OPTIONAL PARAMS
   *
   *  @param {boolean} disabled - dùng để đổi màu của label cho trường hợp các
   *                              input disabled
   *  @param {boolean} required - dùng để hiện dấu * với mục đích nhắc đây là
   *                              input required
   */
  const { label, disabled, required } = props;
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
