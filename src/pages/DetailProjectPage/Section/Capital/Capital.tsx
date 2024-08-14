import { Col, Row } from "antd";
import { CheckboxComponent, DatePickerComponent } from "../../../../components";

interface Props {
  data: any;
}

interface Option {
  label: string;
  value: string;
}

const Capital = ({ data }: Props) => {
  const options: Option[] = data?.rounds?.map((round: any, index: number) => {
    return {
      label: "Investment Round " + (index + 1),
      value: (index + 1).toString(),
      component: (
        <Row key={round.value} align="middle" gutter={[40, 20]}>
          <Col xs={24} lg={12} md={24}>
            <DatePickerComponent disabled dateValue={round.startDate} />
          </Col>

          <Col xs={24} lg={12} md={24}>
            <DatePickerComponent disabled dateValue={round.endDate} />
          </Col>
        </Row>
      ),
    };
  });
  const value = options ? options?.map((item) => item.value) : [];
  return (
    <Row gutter={[16, 16]}>
      {options && (
        <Col span={24}>
          <CheckboxComponent
            optionsData={options}
            useCricle={false}
            allValues={value}
            disabled
          />
        </Col>
      )}
    </Row>
  );
};

export default Capital;
