import { Col, Row } from "antd";
import {
  LabelComponent,
  DatePickerComponent,
  MultipleSelect,
  TextAreaComp,
} from "../../../../components";
import { FormikProps } from "formik";
import { Project } from "../../../../types/type";

interface ProjectDetailProps {
  formik: FormikProps<Project>;
}

const ProjectDetails: React.FC<ProjectDetailProps> = ({ formik }) => {
  const handleTagChange = (selectedTags: string[]) => {
    const formattedTags = selectedTags.map((tag) => ({
      tag_name: tag,
      tag_value: tag,
    }));
    formik.setFieldValue("project_detail.tags", formattedTags);
  };
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
                  placeholder="estimate"
                  disabled={false}
                  dateValue={formik.values.project_detail.start_date}
                  formik={formik}
                  fieldName="project_detail.start_date"
                />
              </div>

              {formik.touched.project_detail?.start_date &&
              formik.errors.project_detail?.start_date ? (
                <div className="text-red-600">
                  {formik.errors.project_detail.start_date}
                </div>
              ) : null}
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={24}>
          <div className="mb-[30px]">
            <div>
              <LabelComponent label="Project tags" />
            </div>
            <div className="mt-[8px]">
              <MultipleSelect
                value={formik.values.project_detail.tags.map(
                  (tag) => tag.tag_name
                )}
                onChange={handleTagChange}
              />
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
                value={formik.values.project_detail.project_description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.project_detail?.project_description &&
              formik.errors.project_detail?.project_description ? (
                <div className="text-red-600">
                  {formik.errors.project_detail.project_description}
                </div>
              ) : null}
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
                value={formik.values.project_detail.ecosystem}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.project_detail?.ecosystem &&
              formik.errors.project_detail?.ecosystem ? (
                <div className="text-red-600">
                  {formik.errors.project_detail.ecosystem}
                </div>
              ) : null}
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
                value={formik.values.project_detail.current_community}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.project_detail?.current_community &&
              formik.errors.project_detail?.current_community ? (
                <div className="text-red-600">
                  {formik.errors.project_detail.current_community}
                </div>
              ) : null}
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
                value={formik.values.project_detail.size_existing_user}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.project_detail?.size_existing_user &&
              formik.errors.project_detail?.size_existing_user ? (
                <div className="text-red-600">
                  {formik.errors.project_detail.size_existing_user}
                </div>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
