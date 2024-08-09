import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import "../InputComp.scss";
import React from "react";
const { TextArea } = Input;

const TextAreaComp: React.FC<TextAreaProps> = (props) => {
  return <TextArea {...props} className="textarea-custom" rows={4} />;
};

export default TextAreaComp;
