import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import TextAreaComp from "../../../../components/CommonInput/InputComp/TextArea/TextAreaComp";

import React from "react";

interface LinkProps {
    data: any
}

const Links: React.FC<LinkProps> = ({ data }) => {
    return (
        <div>
            <Row gutter={[20, 30]}>
                <Col span={12}>
                    <div>
                        <LabelComponent label="Project Website" required />
                    </div>
                    <div className="mt-2">
                        <InputComp
                            name="links.project_website"
                            placeholder="e.g. https://abc.io"
                            value={data?.project_website}
                            disabled
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <LabelComponent label="Project Twitter" required />
                    </div>
                    <div className="mt-2">
                        <InputComp
                            name="links.project_twitter"
                            placeholder="e.g. https://twitter.com/abc"
                            value={data?.project_twitter}
                            disabled

                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <LabelComponent label="Project Telegram" required />
                    </div>
                    <div className="mt-2">
                        <InputComp
                            name="links.project_telegram"
                            placeholder="e.g. https://t.me/abc"
                            value={data?.project_telegram}
                            disabled
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <LabelComponent label="Project Medium" />
                    </div>
                    <div className="mt-2">
                        <InputComp
                            name="links.project_medium"
                            placeholder="e.g. https://medium.com/@abc"
                            value={data?.project_medium}
                            disabled

                        />
                    </div>
                </Col>
                <Col span={24}>
                    <div>
                        <div>
                            <LabelComponent label="Project other links" />
                        </div>
                        <div className="mt-2">
                            <TextAreaComp
                                name="links.project_other_link"
                                placeholder="e.g. https://drive.google.com/abc..."
                                value={data?.project_other_link}
                                disabled
                            />

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Links;