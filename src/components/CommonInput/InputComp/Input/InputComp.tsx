import { Input, InputProps } from 'antd';
import "../InputComp.scss"
import React from 'react';

interface InputCompProp extends InputProps {

}

const InputComp: React.FC<InputCompProp> = (props) => {
  return (
    <Input {...props} className='custom-input' />
  )
}

export default InputComp
