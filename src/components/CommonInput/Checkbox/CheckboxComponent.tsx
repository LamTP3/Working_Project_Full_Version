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
  const defaultValues = allValues ?? undefined;
  return (
    <CheckboxWarraper $circle={useCricle} $disabled={disabled}>
      <Checkbox.Group
        defaultValue={defaultValues}
        onChange={onChange}
        disabled={disabled}
      >
        <Row gutter={[40, 20]}>
          {optionsData.map((option) => (
            <React.Fragment key={option.value}>
              {option.component ? (
                <>
                  <Col xs={24} lg={6} md={6} sm={24} className="mt-3">
                    <Checkbox value={option.value} disabled={disabled}>
                      {option.label}
                    </Checkbox>
                  </Col>
                  <Col xs={24} lg={18} md={18} sm={24}>
                    {option.component}
                  </Col>
                </>
              ) : (
                <Col span={24} className="mt-3">
                  <Checkbox value={option.value} disabled={disabled}>
                    {option.label}
                  </Checkbox>
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Checkbox.Group>
    </CheckboxWarraper>
  );
};

export default CheckboxComponent;
