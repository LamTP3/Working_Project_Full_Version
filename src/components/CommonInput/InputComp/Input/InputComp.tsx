import { Input, InputProps } from "antd";
import "../InputComp.scss";
import React from "react";

const InputComp: React.FC<InputProps> = (props) => {
  return <Input {...props} className="custom-input" />;
};

export default InputComp;
