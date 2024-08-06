import { Button, ButtonProps } from 'antd'
import React from 'react'
import "./IconButtonComp.scss"

interface IconButtonProp extends ButtonProps {}

const IconButtonComp: React.FC<IconButtonProp> = (props) => {
  return (
    <Button className='iconButton-custom' {...props} shape="circle"/>
  )
}

export default IconButtonComp
