import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import RadioComponent from "../../../../components/CommonInput/Radio/RadioComponent";
import TextAreaComp from "../../../../components/CommonInput/InputComp/TextArea/TextAreaComp";
import { formatPrice } from "../../../../helper/util";

interface PublicTokenSaleProps {
  data: any;
}

const PublicTokenSale: React.FC<PublicTokenSaleProps> = ({ data }) => {
  const radioOptions = [
    { label: "Yes", value: "1" },
    { label: "No", value: "2" },
  ];
  return (
    <div>
      <Row>
        <Col span={12} className="pr-9">
          <div>
            <LabelComponent
              label="Total amount to be raised from public token sales?"
              required
            />
          </div>
          <div>
            <InputComp
              name="public_token_sale.total_amount"
              placeholder="$1,000,000"
              value={formatPrice(data?.total_amount)}
              disabled
            />
          </div>
        </Col>
        <Col span={12} className="pr-9">
          <div>
            <LabelComponent
              label="Preferred amount to be raised through GalaxyPad?"
              required
            />
          </div>
          <div>
            <InputComp
              name="public_token_sale.amount_through_Galaxy"
              placeholder="$500,000"
              value={formatPrice(data?.amount_through_Galaxy)}
              disabled
            />
          </div>
        </Col>
        <Col span={12} className="pr-9 mt-5">
          <div>
            <LabelComponent
              label="Are you flexible with the amounts? "
              required
            />
          </div>
          <div>
            {data ? (
              <RadioComponent
                options={radioOptions}
                disabled
                valueChoose={data?.flexible_amount}
              />
            ) : null}
          </div>
        </Col>
        <Col span={12} className="pr-9 mt-5">
          <div>
            <LabelComponent
              label="Planned FDV of tokens at launch? "
              required
            />
          </div>
          <div>
            <InputComp
              name="public_token_sale.planned_FDV"
              placeholder="$30,000,000"
              value={formatPrice(data?.planned_FDV)}
              disabled
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} className=" pr-9">
          <div>
            <LabelComponent label="Other information" />
          </div>
          <div>
            <TextAreaComp
              name="public_token_sale.other_information"
              placeholder="Provide any information that helps us understand any expectations that you have."
              value={data?.other_information}
              disabled
            />
          </div>
        </Col>
        <Col span={24} className="mt-5 pr-9">
          <div>
            <LabelComponent label="When do you want to conduct the sale?" />
          </div>
          <div>
            <InputComp
              name="public_token_sale.sale"
              placeholder="Provide any information that helps us understand any expectations that you have."
              value={data?.sale}
              disabled
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PublicTokenSale;
