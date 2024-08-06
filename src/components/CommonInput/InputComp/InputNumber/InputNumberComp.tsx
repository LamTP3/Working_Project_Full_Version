import { InputNumber, InputNumberProps } from "antd"
import "./InputNumberComp.scss"

interface InterNumberCompProp extends InputNumberProps {
  unit?: string
}

const InputNumberComp: React.FC<InterNumberCompProp> = ({ unit, ...props }) => {
  const unitStyle = unit ? { '--unit-content': `"${unit}"` } as React.CSSProperties : {};

  return (
    <div className="inputnumber-container">
      <InputNumber {...props} style={unitStyle} className='inputnumber-custom' placeholder="0.00" />
    </div>
  )
}

export default InputNumberComp
