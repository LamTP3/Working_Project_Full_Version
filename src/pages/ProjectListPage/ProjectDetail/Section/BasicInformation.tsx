import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import UploadFile from "../../../../components/CommonInput/UploadFile/UploadFile";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";

interface BasicInformationProps {
  data: any;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ data }) => {
  return (
    <div>
      <div>
        <Row>
          <Col className="gutter-row mt-5" span={24}>
            <Row gutter={[40, 0]}>
              <Col span={12}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row " span={24}>
                    <div>
                      <LabelComponent label="Project name" />
                    </div>
                    <div className="mt-2">
                      <InputComp
                        name="basic_information.project_name"
                        placeholder="e.g.Bitcoin"
                        value={data?.project_name}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Contact name" />
                    </div>
                    <div className="mt-2">
                      <InputComp
                        name="basic_information.contact_name"
                        placeholder="Name & Surname"
                        value={data?.contact_name}
                        disabled
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <div>
                  <LabelComponent label="Project Logo" />
                </div>
                <div className="mt-2">
                  <UploadFile
                    width="137px"
                    height="137px"
                    label="Drag and drop an image file here or click"
                    value={data?.project_logo}
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row mt-5" span={24}>
            <Row gutter={[40, 0]}>
              <Col span={12}>
                <Row>
                  <Col className="gutter-row " span={24}>
                    <div>
                      <LabelComponent label="Contact Telegram Handle" />
                    </div>
                    <div className="mt-2">
                      <InputComp
                        name="basic_information.contact_telegram_handle"
                        placeholder="e.g.@johndoe"
                        value={data?.contact_telegram_handle}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Email" />
                    </div>

                    <div className="mt-2">
                      <InputComp
                        name="basic_information.email"
                        placeholder="e.g.abc@abc.xyz"
                        value={data?.email}
                        disabled
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row" span={12}>
                <div>
                  <LabelComponent label="Project Cover" />
                </div>
                <div className="mt-2">
                  <UploadFile
                    width="468px"
                    height="137px"
                    label="Drag and drop an image/video file here or click"
                    value={data?.project_cover}
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BasicInformation;
