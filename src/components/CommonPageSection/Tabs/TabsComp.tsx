import { Tabs } from "antd";
import React from "react";
import type { TabsProps } from "antd";
import "./TabsComp.scss";

const TabsComp: React.FC<TabsProps> = (props) => {
  return <Tabs {...props} className="tabs-custom" />;
};

export default TabsComp;
