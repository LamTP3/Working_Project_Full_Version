import { useState } from "react";
import { CheckboxComponent } from "../../../../components";
import "./StatusOfPartnerships.scss";
interface Props {
  data: any;
}
const StatusOfPartnership: React.FC<Props> = ({ data }) => {
  const options = [
    { label: "Have you engaged with Marketing Agencies?", value: "1" },
    { label: "Have you engaged with Centralised Exchanges?", value: "2" },
    { label: "Have you engaged with Market Makers?", value: "3" },
  ];

  const [checkedOptions, setCheckedOptions] = useState([options[0].value]);
  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedOptions(checkedValues);
    console.log("Check Option Partener Ship: ", checkedOptions);
  };

  return (
    <>
      {data ? (
        <CheckboxComponent
          optionsData={options}
          useCricle={false}
          onChange={handleCheckboxChange}
          allValues={data}
          disabled
        />
      ) : (
        <div> Somthing Wrong</div>
      )}
    </>
  );
};

export default StatusOfPartnership;
