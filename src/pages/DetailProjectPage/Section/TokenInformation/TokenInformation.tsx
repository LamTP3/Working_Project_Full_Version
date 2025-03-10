import { Col, Row } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import {
  InputNumberComp,
  LabelComponent,
  InputComp,
  IconButtonComp,
} from "../../../../components";
import React from "react";

interface TokenInformationProps {
  data: any;
}

const TokenInformation: React.FC<TokenInformationProps> = ({ data }) => {
  return (
    <div>
      <Row>
        <Col className="gutter-row mb-[30px]" span={24}>
          <Row gutter={[40, 20]}>
            <Col className="gutter-row " xs={24} lg={12} md={24}>
              <div className="flex gap-[20px]">
                <div className="w-full">
                  <div className="mb-2 w-full">
                    <LabelComponent label="Token name " />
                  </div>
                  <div>
                    <InputComp
                      name="token_information.token_name"
                      placeholder="e.g. Bitcoin"
                      value={data?.token_name}
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 w-[130px]">
                    <LabelComponent label="Token Symbol " />
                  </div>
                  <div>
                    <InputComp
                      name="token_information.token_symbol"
                      placeholder="e.g. BTC"
                      value={data?.token_symbol}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row " xs={24} md={12}>
              <div>
                <div className="mb-2">
                  <LabelComponent label="Token contract address" />
                </div>
                <div>
                  <InputComp
                    name="token_information.token_contract_address"
                    placeholder="e.g. 0xc0f2...84d215"
                    value={data?.token_contract_address}
                    disabled
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <LabelComponent label="Tokenomics *" />
        {data?.tokennomics.map((item: any) => (
          <Col
            key={item.tokennomics_title}
            className="gutter-row mb-[15px] mt-2"
            span={24}
          >
            <Row>
              <Col className="gutter-row flex gap-5" span={24}>
                <div className="w-full">
                  <InputComp
                    placeholder="Title"
                    value={item.tokennomics_title}
                    disabled
                  />
                </div>
                <div className="max-w-[130px]">
                  <InputNumberComp
                    value={item.tokennomics_value}
                    step={0.01}
                    unit="%"
                    disabled
                  />
                </div>
                <div>
                  <IconButtonComp
                    icon={<MinusOutlined />}
                    size="large"
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </Col>
        ))}

        <div className="w-full mt-4 font-normal flex justify-end">
          <LabelComponent label="Total tokenomics must be 100%" />
        </div>
      </Row>
    </div>
  );
};

export default TokenInformation;
