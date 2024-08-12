import React, { useState } from "react";
import { Col, Row } from "antd";
import { FormikProps } from "formik";
import { CheckboxComponent, DatePickerComponent } from "../../../../components";
import { Project } from "../../../../types/type";

interface CapitalProps {
  formik: FormikProps<Project>;
}

const Capital: React.FC<CapitalProps> = ({ formik }) => {
  const optionsData = [
    { label: "Invesment Round 1", value: "1" },
    { label: "Invesment Round 2", value: "2" },
    { label: "Invesment Round 3", value: "3" },
    { label: "Invesment Round 4", value: "4" },
  ];

  const [checkedOptions, setCheckedOptions] = useState([optionsData[0].value]);

  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedOptions(checkedValues);
  };

  const options = optionsData.map((option, index) => ({
    label: option.label,
    value: option.value,
    component: (
      <Row key={option.value} align="middle" gutter={[40, 0]}>
        <Col span={12}>
          <DatePickerComponent
            formik={formik}
            fieldName={`capital.rounds[${index}].startDate`}
            dateValue={formik.values.capital.rounds[index]?.startDate}
            disabled={!checkedOptions.includes(option.value)}
          />
        </Col>

        <Col span={12}>
          <DatePickerComponent
            fieldName={`capital.rounds[${index}].endDate`}
            formik={formik}
            dateValue={formik.values.capital.rounds[index]?.endDate}
            disabled={!checkedOptions.includes(option.value)}
          />
        </Col>
      </Row>
    ),
  }));

  return (
    <CheckboxComponent
      optionsData={options}
      useCricle={false}
      onChange={handleCheckboxChange}
    />
  );
};

export default Capital;
