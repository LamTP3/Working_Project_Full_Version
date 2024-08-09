import React from "react";
import "./LogoComp.scss";
import { LogoProps } from "../SectionType";

const LogoComp: React.FC<LogoProps> = ({ size }) => {
  return <div className={`logo-custom ${size}`}></div>;
};

export default LogoComp;
