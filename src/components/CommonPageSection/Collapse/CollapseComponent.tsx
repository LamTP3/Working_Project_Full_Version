import React from "react";
import { Collapse } from "antd";
import { TabUpIcon } from "../../../Icon";
import { CollapseProps } from "./CollapseType";
import { Warraper } from "./styled";
const CollapseComponent: React.FC<CollapseProps> = ({
  title,
  child,
  active,
}) => {
  return (
    <Warraper>
      <Collapse
        defaultActiveKey={active ? ["1"] : undefined}
        items={[
          {
            key: "1",
            label: (
              <div className="header-style">
                <div className="title-style">{title}</div>
                <div className="line-between"></div>
                <div>
                  <TabUpIcon />
                </div>
              </div>
            ),
            children: <>{child}</>,
            showArrow: false,
          },
        ]}
      />
    </Warraper>
  );
};

export default CollapseComponent;
