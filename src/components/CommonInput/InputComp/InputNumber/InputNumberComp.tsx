import { InputNumber } from "antd";
import "./InputNumberComp.scss";
import { InterNumberCompProp } from "../../CommonInputType";

const InputNumberComp: React.FC<InterNumberCompProp> = (props) => {
  /** OPTIONS PARAMETER
   * @@param {string} unit - có tác dụng hiện kí tự như % ở trong input number
   */
  const { unit, ...rest } = props;
  const unitStyle = unit
    ? ({ "--unit-content": `"${unit}"` } as React.CSSProperties)
    : {};

  return (
    <div className="inputnumber-container">
      <InputNumber
        {...rest}
        style={unitStyle}
        className="inputnumber-custom"
        placeholder="0.00"
      />
    </div>
  );
};

export default InputNumberComp;
