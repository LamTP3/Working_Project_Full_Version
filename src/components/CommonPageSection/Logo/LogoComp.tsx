import React from "react";
import logo from "../../../assets/Logo/Logo.png";
import "./LogoComp.scss";

type Prop = {
  size: "small" | "medium" | "large";
};

// small: 40px, medium: 50px, large: 100px

const LogoComp: React.FC<Prop> = ({ size }) => {
  return (
    <img className={`logo-custom ${size}`} src={logo} alt="GalaxyPad-logo" />
  );
};

export default LogoComp;
