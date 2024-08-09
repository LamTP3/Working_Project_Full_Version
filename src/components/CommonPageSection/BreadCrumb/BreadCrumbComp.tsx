import React from "react";
import "./BreadCrumbComp.scss";
import { Breadcrumb, BreadcrumbProps } from "antd";

const BreadCrumbComp: React.FC<BreadcrumbProps> = (props) => {
  return <Breadcrumb className="breadcrumb-custom" {...props} />;
};

export default BreadCrumbComp;
