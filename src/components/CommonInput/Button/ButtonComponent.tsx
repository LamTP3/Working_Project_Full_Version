import React from "react";
import { Button } from "antd";
import { ButtonWarraper } from "./styled";
import { ArrowIcon } from "../../../Icon";
import { ButtonCompProps } from "../CommonInputType";

const ButtonComponent: React.FC<ButtonCompProps> = (props) => {
  /** REQUIRED PARAMS
   * @param {string} background_color - nhận một trong các giá trị ("Gradient", "Gradient_Danger", "Gradient_Default")
   *                                    dùng thay để đổi màu background.
   * @param {string} button_content   - nội dung hiển thị trên button.
   * @param {boolean} arrow_icon      - nếu true, hiển thị icon mũi tên.
   */

  /** OPTIONAL PARAMS
   * @param {string} [width]          - thay đổi kích thước của button.
   * @param {function} [onClick]      - hàm được gọi khi click vào button.
   */
  const {
    background_color,
    button_content,
    arrow_icon,
    onClick,
    width,
    ...rest
  } = props;

  return (
    <div>
      <ButtonWarraper $width={width}>
        <Button
          {...rest}
          type="primary"
          className={`no-border ${background_color}`}
          onClick={onClick}
        >
          <div>{button_content}</div>
          <div>{arrow_icon && <ArrowIcon />}</div>
        </Button>
      </ButtonWarraper>
    </div>
  );
};

export default ButtonComponent;
