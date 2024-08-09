import { Button, ButtonProps } from "antd";
import React from "react";
import "./IconButtonComp.scss";

const IconButtonComp: React.FC<ButtonProps> = (props) => {
  return <Button className="iconButton-custom" {...props} shape="circle" />;
};

export default IconButtonComp;
