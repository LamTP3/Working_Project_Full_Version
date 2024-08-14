import { Col, Row } from "antd";
import {
  LabelComponent,
  TextAreaComp,
  InputComp,
  RadioComponent,
} from "../../../../components";

import { FormikProps } from "formik";
import { Project } from "../../../../types/type";
import "./PublicTokenSale.scss";
interface PublicTokenSaleProps {
  formik: FormikProps<Project>;
}

const PublicTokenSale: React.FC<PublicTokenSaleProps> = ({ formik }) => {
  const radioOptions = [
    { label: "Yes", value: "1" },
    { label: "No", value: "2" },
  ];
  return (
    <div>
      <Row gutter={[0, 10]}>
        <Col xs={24} md={12} className="repon-pd pr-9">
          <div>
            <LabelComponent
              label="Total amount to be raised from public token sales?"
              required
            />
          </div>
          <div className="mt-2">
            <InputComp
              name="public_token_sale.total_amount"
              placeholder="$1,000,000"
              value={formik.values.public_token_sale.total_amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.public_token_sale?.total_amount &&
            formik.errors.public_token_sale?.total_amount ? (
              <div className="text-red-600">
                {formik.errors.public_token_sale.total_amount}
              </div>
            ) : null}
          </div>
        </Col>
        <Col xs={24} md={12} className="rp-mt-custom repon-pd pr-9 ">
          <div>
            <LabelComponent
              label="Preferred amount to be raised through GalaxyPad?"
              required
            />
          </div>
          <div className="mt-2">
            <InputComp
              name="public_token_sale.amount_through_Galaxy"
              placeholder="$500,000"
              value={formik.values.public_token_sale.amount_through_Galaxy}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.public_token_sale?.amount_through_Galaxy &&
            formik.errors.public_token_sale?.amount_through_Galaxy ? (
              <div className="text-red-600">
                {formik.errors.public_token_sale.amount_through_Galaxy}
              </div>
            ) : null}
          </div>
        </Col>
        <Col xs={24} md={12} className="pr-9 mt-5">
          <div>
            <LabelComponent
              label="Are you flexible with the amounts? "
              required
            />
          </div>
          <div className="mt-2">
            <RadioComponent
              options={radioOptions}
              name="public_token_sale.flexible_amount"
              value={formik.values.public_token_sale.flexible_amount}
              onChange={formik.handleChange}
            />
            {formik.touched.public_token_sale?.flexible_amount &&
            formik.errors.public_token_sale?.flexible_amount ? (
              <div className="text-red-600">
                {formik.errors.public_token_sale.flexible_amount}
              </div>
            ) : null}
          </div>
        </Col>
        <Col xs={24} md={12} className="pr-9 mt-5">
          <div>
            <LabelComponent
              label="Planned FDV of tokens at launch? "
              required
            />
          </div>
          <div className="mt-2">
            <InputComp
              name="public_token_sale.planned_FDV"
              placeholder="$30,000,000"
              value={formik.values.public_token_sale.planned_FDV}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.public_token_sale?.planned_FDV &&
            formik.errors.public_token_sale?.planned_FDV ? (
              <div className="text-red-600">
                {formik.errors.public_token_sale.planned_FDV}
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row gutter={[0, 10]}>
        <Col span={24} className=" mt-5 pr-9">
          <div>
            <LabelComponent label="Other information" />
          </div>
          <div className="mt-2">
            <TextAreaComp
              name="public_token_sale.other_information"
              placeholder="Provide any information that helps us understand any expectations that you have."
              value={formik.values.public_token_sale.other_information}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </Col>
        <Col span={24} className="mt-5 pr-9">
          <div>
            <LabelComponent label="When do you want to conduct the sale?" />
          </div>
          <div className="mt-2">
            <InputComp
              name="public_token_sale.sale"
              placeholder="Provide any information that helps us understand any expectations that you have."
              value={formik.values.public_token_sale.sale}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PublicTokenSale;
