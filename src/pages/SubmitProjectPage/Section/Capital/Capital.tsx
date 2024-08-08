import React, { useState } from "react";
import { Col, Row } from "antd";
import { FormikProps } from "formik";
import { CheckboxComponent, DatePickerComponent } from "../../../../components";

import { Project } from "../../../../type/type";
import dayjs from "dayjs";

interface CapitalProps {
  formik: FormikProps<Project>;
}

const Capital: React.FC<CapitalProps> = ({ formik }) => {
  const options = [
    { label: "Invesment Round 1", value: "1" },
    { label: "Invesment Round 2", value: "2" },
    { label: "Invesment Round 3", value: "3" },
    { label: "Invesment Round 4", value: "4" },
  ];

  const [checkedOptions, setCheckedOptions] = useState([options[0].value]);

  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedOptions(checkedValues);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <CheckboxComponent
                optionsData={options}
                useCricle={false}
                onChange={handleCheckboxChange}
                height={true}
              />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          {options.map((option, index) => (
            <Row key={index} className="mt-5" align="middle" gutter={[40, 0]}>
              <Col span={12}>
                <DatePickerComponent
                  fieldName={`capital.rounds[${index}].startDate`}
                  formik={formik}
                  disabled={!checkedOptions.includes(option.value)}
                  value={
                    formik.values.capital.rounds[index]?.startDate
                      ? dayjs(formik.values.capital.rounds[index].startDate)
                      : null
                  }
                />
              </Col>
              <Col span={12}>
                <DatePickerComponent
                  fieldName={`capital.rounds[${index}].endDate`}
                  formik={formik}
                  disabled={!checkedOptions.includes(option.value)}
                  value={
                    formik.values.capital.rounds[index]?.endDate
                      ? dayjs(formik.values.capital.rounds[index].endDate)
                      : null
                  }
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
