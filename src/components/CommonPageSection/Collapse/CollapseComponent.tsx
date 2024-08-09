import React from "react";
import { Collapse } from "antd";
import { TabUpIcon } from "../../../Icon";
import { CollapseProps } from "../SectionType";
import { Warraper } from "./styled";
const CollapseComponent: React.FC<CollapseProps> = (props) => {
  /**
   * REQUIRE PARAMS
   *
   *  @param {string} title    - Tên của Collapse
   *  @param {ReactNode} child - Dùng để hiển thị nội dung content bên trong Collapse
   */

  /**
   * OPTIONAL PARAMS
   *
   *  @param {boolean} active  - Mặc định giúp Collapse luôn mở
   */
  const { title, child, active } = props;
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
