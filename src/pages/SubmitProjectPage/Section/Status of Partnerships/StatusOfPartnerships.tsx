import React, { useState } from "react";
import { CheckboxComponent } from "../../../../components";

import { FormikProps } from "formik";
import { Project } from "../../../../types/type";
import "./StatusOfPartnerships.scss";

interface StatusOfPartnershipsProps {
  formik: FormikProps<Project>;
}

const StatusOfPartnerships: React.FC<StatusOfPartnershipsProps> = ({
  formik,
}) => {
  const options = [
    { label: "Have you engaged with Marketing Agencies?", value: "1" },
    { label: "Have you engaged with Centralised Exchanges?", value: "2" },
    { label: "Have you engaged with Market Makers?", value: "3" },
  ];

  const [checkedOptions, setCheckedOptions] = useState([options[0].value]);

  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedOptions(checkedValues);
    formik.setFieldValue("status_of_partnerships", checkedValues);
    console.log("Check Option Partener Ship: ", checkedOptions);
  };

  return (
    <>
      <CheckboxComponent
        optionsData={options}
        useCricle={false}
        value={formik.values.status_of_partnerships}
        onChange={handleCheckboxChange}
      />
      {formik.touched.status_of_partnerships &&
      formik.errors.status_of_partnerships ? (
        <div className="text-red-600">
          {typeof formik.errors.status_of_partnerships === "string"
            ? formik.errors.status_of_partnerships
            : "Some thing wrong!"}
        </div>
      ) : null}
    </>
  );
};

export default StatusOfPartnerships;
