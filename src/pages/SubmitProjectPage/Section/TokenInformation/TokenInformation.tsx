import { Col, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  LabelComponent,
  InputComp,
  InputNumberComp,
  IconButtonComp,
} from "../../../../components";

import { FormikProps } from "formik";
import { Project } from "../../../../types/type";
import React from "react";

interface TokenInformationProps {
  formik: FormikProps<Project>;
}

const TokenInformation: React.FC<TokenInformationProps> = ({ formik }) => {
  const handleAddTokenomics = () => {
    formik.setFieldValue("token_information.tokennomics", [
      ...formik.values.token_information.tokennomics,
      { tokennomics_Title: "", tokennomics_value: 0.0 },
    ]);
  };

  const handleRemoveTokenomics = (index: number) => {
    const newTokenomics = formik.values.token_information.tokennomics.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("token_information.tokennomics", newTokenomics);
  };

  return (
    <div>
      <Row>
        <Col className="gutter-row mb-[30px]" span={24}>
          <Row gutter={[40, 0]}>
            <Col className="gutter-row " span={12}>
              <div className="flex gap-[20px]">
                <div className="w-full">
                  <div className="mb-2">
                    <LabelComponent label="Token name " required />
                  </div>
                  <div>
                    <InputComp
                      name="token_information.token_name"
                      placeholder="e.g. Bitcoin"
                      value={formik.values.token_information.token_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.token_information?.token_name &&
                    formik.errors.token_information?.token_name ? (
                      <div className="text-red-600">
                        {formik.errors.token_information.token_name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <LabelComponent label="Token Symbol " required />
                  </div>
                  <div className="max-w-[180px]">
                    <InputComp
                      name="token_information.token_symbol"
                      placeholder="e.g. BTC"
                      value={formik.values.token_information.token_symbol}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.token_information?.token_symbol &&
                    formik.errors.token_information?.token_symbol ? (
                      <div className="text-red-600">
                        {formik.errors.token_information.token_symbol}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row " span={12}>
              <div>
                <div className="mb-2">
                  <LabelComponent label="Token contract address" required />
                </div>
                <div>
                  <InputComp
                    name="token_information.token_contract_address"
                    placeholder="e.g. 0xc0f2...84d215"
                    value={
                      formik.values.token_information.token_contract_address
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.token_information?.token_contract_address &&
                  formik.errors.token_information?.token_contract_address ? (
                    <div className="text-red-600">
                      {formik.errors.token_information.token_contract_address}
                    </div>
                  ) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <LabelComponent label="Tokenomics *" />
        {formik.values.token_information.tokennomics.map((item, index) => (
          <Col
            key={item.tokennomics_title}
            className="gutter-row mb-[15px] mt-2"
            span={24}
          >
            <Row>
              <Col className="gutter-row flex gap-5" span={24}>
                <div className="w-full">
                  <InputComp
                    name={`token_information.tokennomics[${index}].tokennomics_Title`}
                    placeholder="Title"
                    value={item.tokennomics_title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.token_information?.tokennomics &&
                  formik.errors.token_information?.tokennomics ? (
                    <div className="text-red-600">
                      {
                        (formik.errors.token_information.tokennomics as any)[
                          index
                        ]?.tokennomics_Title
                      }
                    </div>
                  ) : null}
                </div>
                <div className="max-w-[130px]">
                  <InputNumberComp
                    name={`token_information.tokennomics[${index}].tokennomics_value`}
                    value={item.tokennomics_value}
                    step={0.01}
                    unit="%"
                    onChange={(value) =>
                      formik.setFieldValue(
                        `token_information.tokennomics[${index}].tokennomics_value`,
                        value
                      )
                    }
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.token_information?.tokennomics &&
                  formik.errors.token_information?.tokennomics ? (
                    <div className="text-red-600">
                      {
                        (formik.errors.token_information.tokennomics as any)[
                          index
                        ]?.tokennomics_value
                      }
                    </div>
                  ) : null}
                </div>
                <div>
                  <IconButtonComp
                    icon={<MinusOutlined />}
                    size="large"
                    disabled
                    onClick={() => handleRemoveTokenomics(index)}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        ))}
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp placeholder="Title" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue={0.0} step={0.01} unit="%" />
              </div>
              <div>
                <IconButtonComp
                  icon={<PlusOutlined />}
                  size="large"
                  onClick={handleAddTokenomics}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <div className="w-full mt-4 font-normal flex justify-end">
          <LabelComponent label="Total tokenomics must be 100%" />
        </div>
      </Row>
    </div>
  );
};

export default TokenInformation;
