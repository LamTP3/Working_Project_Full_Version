import { Select, SelectProps } from "antd";
import "./SelectComp.scss";
import React from "react";

const SelectComp: React.FC<SelectProps> = (props) => {
  return <Select {...props} className="select-custom" placement="bottomLeft" />;
};

export default SelectComp;
