import { Col, Row } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import InputNumberComp from "../../../../components/CommonInput/InputComp/InputNumber/InputNumberComp";
import IconButtonComp from "../../../../components/CommonInput/IconButton/IconButtonComp";
import React from "react";

interface TokenInformationProps {
    data: any;
}

const TokenInformation: React.FC<TokenInformationProps> = ({ data }) => {
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
                                            value={data?.token_name}
                                            disabled
                                        />
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
                                            value={data?.token_symbol}
                                            disabled
                                        />
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
                                        value={data?.token_contract_address}
                                        disabled
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <LabelComponent label="Tokenomics *" />
                {data?.tokennomics.map(
                    (item: any, index: number) => (
                        <Col key={index} className="gutter-row mb-[15px] mt-2" span={24}>
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
                                        <IconButtonComp icon={<MinusOutlined />} size="large" disabled />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    )
                )}

                <div className="w-full mt-4 font-normal flex justify-end">
                    <LabelComponent label="Total tokenomics must be 100%" />
                </div>
            </Row>
        </div>
    );
};

export default TokenInformation;
