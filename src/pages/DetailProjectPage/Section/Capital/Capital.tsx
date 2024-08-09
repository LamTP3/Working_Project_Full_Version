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
    console.log("Data at index", index, round);
    return {
      label: "Investment Round " + (index + 1),
      value: (index + 1).toString(),
    };
  });
  const value = options ? options?.map((item) => item.value) : [];
  return (
    <div>
      <Row gutter={[16, 16]}>
        {options && (
          <Col span={8}>
            <Row>
              <Col span={12}>
                <CheckboxComponent
                  optionsData={options}
                  useCricle={false}
                  height={true}
                  allValues={value}
                  disabled
                />
              </Col>
            </Row>
          </Col>
        )}

        <Col span={16}>
          {data?.rounds?.map((item: any) => (
            <Row key={item} className="mt-5" align="middle" gutter={[40, 0]}>
              <Col span={12}>
                <DatePickerComponent
                  fieldName="startDate"
                  disabled
                  dateValue={item.startDate}
                />
              </Col>
              <Col span={12}>
                <DatePickerComponent
                  fieldName="endDate"
                  disabled
                  dateValue={item.endDate}
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Capital;
