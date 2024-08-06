import React from "react";
import { Button, ButtonProps } from "antd";
import { ButtonWarraper } from "./styled";
import { ArrowIcon } from "../../../Icon";
type BackgroundColor = "Gradient" | "Gradient_Danger" | "Gradient_Default";
interface ButtonCompProps extends ButtonProps {
  background_color: BackgroundColor;
  button_content: string;
  arrow_icon: boolean;
  width?: string;
  buttonType?: "button" | "submit";
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonCompProps> = (props) => {
  const {
    background_color,
    button_content,
    buttonType,
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
