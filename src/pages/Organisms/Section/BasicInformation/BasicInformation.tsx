import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import UploadFile from "../../../../components/CommonInput/UploadFile/UploadFile";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import { FormikProps } from "formik";
import { Project } from "../../../../type/type";

interface BasicInformationProps {
  formik: FormikProps<Project>;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ formik }) => {
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
                      <LabelComponent label="Project name" required />
                    </div>
                    <div className="mt-2">
                      <InputComp
                        name="basic_information.project_name"
                        placeholder="e.g.Bitcoin"
                        value={formik.values.basic_information.project_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.basic_information?.project_name &&
                        formik.errors.basic_information?.project_name ? (
                        <div className="text-red-600">
                          {formik.errors.basic_information.project_name}
                        </div>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Contact name" required />
                    </div>
                    <div className="mt-2">
                      <InputComp
                        name="basic_information.contact_name"
                        placeholder="Name & Surname"
                        value={formik.values.basic_information.contact_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.basic_information?.contact_name &&
                        formik.errors.basic_information?.contact_name ? (
                        <div className="text-red-600">
                          {formik.errors.basic_information.contact_name}
                        </div>
                      ) : null}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <div>
                  <LabelComponent label="Project Logo" required />
                </div>
                <div className="mt-2">
                  <UploadFile
                    width="137px"
                    height="137px"
                    label="Drag and drop an image file here or click"
                    value={formik.values.basic_information.project_logo}
                    onChange={(value) =>
                      formik.setFieldValue(
                        "basic_information.project_logo",
                        value
                      )
                    }
                  />
                  {formik.touched.basic_information?.project_logo &&
                    formik.errors.basic_information?.project_logo ? (
                    <div className="text-red-600">
                      {formik.errors.basic_information.project_logo}
                    </div>
                  ) : null}
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
                      <LabelComponent
                        label="Contact Telegram Handle"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <InputComp
                        name="basic_information.contact_telegram_handle"
                        placeholder="e.g.@johndoe"
                        value={
                          formik.values.basic_information
                            .contact_telegram_handle
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.basic_information
                      ?.contact_telegram_handle &&
                      formik.errors.basic_information?.contact_telegram_handle ? (
                      <div className="text-red-600">
                        {
                          formik.errors.basic_information
                            .contact_telegram_handle
                        }
                      </div>
                    ) : null}
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Email" required />
                    </div>

                    <div className="mt-2">
                      <InputComp
                        name="basic_information.email"
                        placeholder="e.g.abc@abc.xyz"
                        value={formik.values.basic_information.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.basic_information?.email &&
                        formik.errors.basic_information?.email ? (
                        <div className="text-red-600">
                          {formik.errors.basic_information.email}
                        </div>
                      ) : null}
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
                    value={formik.values.basic_information.project_cover}
                    onChange={(value) =>
                      formik.setFieldValue(
                        "basic_information.project_cover",
                        value
                      )
                    }
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
