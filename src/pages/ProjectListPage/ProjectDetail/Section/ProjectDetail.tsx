import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import DatePickerComponent from "../../../../components/CommonInput/DatePicker/DatePicker";
import MultipleSelect from "../../../../components/CommonInput/MultipleSelect/MultipleSelect";
import TextAreaComp from "../../../../components/CommonInput/InputComp/TextArea/TextAreaComp";
import dayjs from "dayjs";

interface ProjectDetailProps {
    data: any
}

const ProjectDetails: React.FC<ProjectDetailProps> = ({ data }) => {
    return (
        <div>
            <Row>
                <Col className="gutter-row mb-[30px]" span={24}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12}>
                            <div>
                                <LabelComponent label="Project start date" required />
                            </div>
                            <div className="mt-[8px]">
                                <DatePickerComponent
                                    name="project_detail.start_date"
                                    placeholder="estimate"
                                    disabled={true}
                                    value={
                                        data?.start_date
                                            ? dayjs(data?.start_date)
                                            : null
                                    }

                                />

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={24}>
                    <div className="mb-[30px]">
                        <div>
                            <LabelComponent label="Project tags" />
                        </div>
                        <div className="mt-[8px]">
                            <MultipleSelect value={data?.tags.map((item: any) => item.tag_value)} disabled />
                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <div>
                            <LabelComponent label="Project Description" required />
                        </div>
                        <div className="mt-[8px]">
                            <TextAreaComp
                                name="project_detail.project_description"
                                placeholder="Describe the project, including the scope of the project and an explanation of how mature the project is."
                                value={data?.project_description}
                                disabled
                            />

                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <div>
                            <LabelComponent label="Ecosystem" required />
                        </div>
                        <div className="mt-[8px]">
                            <TextAreaComp
                                name="project_detail.ecosystem"
                                placeholder="Describe the project ecosystem. Explain where the project is hosted, the token to be issued and the grants received."
                                value={data?.ecosystem}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <div>
                            <LabelComponent label="Describe Current Community" required />
                        </div>
                        <div className="mt-[8px]">
                            <TextAreaComp
                                name="project_detail.current_community"
                                placeholder="e.g. Provide details of what the current community consist of. e.g. 30,000 Twitter followers and 20,000 telegram members."
                                value={data?.current_community}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <div>
                            <LabelComponent label="Size of Existing Users" required />
                        </div>
                        <div className="mt-[8px]">
                            <TextAreaComp
                                name="project_detail.size_existing_user"
                                placeholder="Provide details of what the current community and user base consist of. e.g. Project currently has 4000 testnet users or project live with $100k TVL from 1000 wallets."
                                value={data?.size_existing_user}
                                disabled
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectDetails;
