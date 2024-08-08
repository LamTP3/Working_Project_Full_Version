import { Col, Row } from "antd";
import { CheckboxComponent, DatePickerComponent } from "../../../../components";
import dayjs from "dayjs";

interface Props {
  data: any;
}

interface Option {
  label: string;
  value: string;
}

const Capital = ({ data }: Props) => {
  const options: Option[] = data?.rounds?.map((data: any, index: number) => ({
    label: "Investment Round " + (index + 1),
    value: (index + 1).toString(),
  }));
  const value = options ? options?.map((item) => item.value) : [];
  return (
    <div>
      <Row gutter={[16, 16]}>
        {options && (
          <>
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
          </>
        )}

        <Col span={16}>
          {data?.rounds?.map((item: any, index: any) => (
            <Row key={index} className="mt-5" align="middle" gutter={[40, 0]}>
              <Col span={12}>
                <DatePickerComponent
                  fieldName="startDate"
                  disabled
                  value={dayjs(item.startDate)}
                />
              </Col>
              <Col span={12}>
                <DatePickerComponent
                  fieldName="endDate"
                  disabled
                  value={dayjs(item.endDate)}
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
