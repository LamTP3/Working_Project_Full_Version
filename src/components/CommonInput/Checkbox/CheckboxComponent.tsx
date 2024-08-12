import React from "react";
import { Checkbox, Col, Row } from "antd";
import { CheckBoxProps } from "../CommonInputType";
import { CheckboxWarraper } from "./styled";

const CheckboxComponent: React.FC<CheckBoxProps> = (props) => {
  /** REQUIRE PARAMS
   *
   * @param {object} optionsData  - nhận kiểu "object" có 2 thuộc tính required là label và value đều kiểu "string" và dùng để hiển thị checkbox
   *                                và nhận một component là option prop
   */

  /** OPTIONAL PARAMS
   * @param {boolean} useCricle   - dùng để hiển thị border hình tròn
   * @param {function} onChange   - dùng để thay đổi value của checkbox
   * @param {Array} allValues     - nhận kiểu "array" dùng để hiển thị checkbox đã được check
   */
  const { optionsData, useCricle, onChange, allValues, disabled } = props;
  const defaultValues = allValues ?? [optionsData[0]?.value];
  return (
    <CheckboxWarraper $circle={useCricle} $disabled={disabled}>
      <Checkbox.Group
        defaultValue={defaultValues}
        onChange={onChange}
        disabled={disabled}
      >
        <Row gutter={[40, 40]}>
          {optionsData.map((option) => (
            <React.Fragment key={option.value}>
              <Col span={option.component ? 6 : 24} className="mt-3">
                <Checkbox value={option.value} disabled={disabled}>
                  {option.label}
                </Checkbox>
              </Col>
              {option.component && <Col span={18}>{option.component}</Col>}
            </React.Fragment>
          ))}
        </Row>
      </Checkbox.Group>
    </CheckboxWarraper>
  );
};

export default CheckboxComponent;
