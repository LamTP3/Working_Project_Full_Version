import React from 'react'
import "./BreadCrumbComp.scss"
import { Breadcrumb, BreadcrumbProps } from 'antd'

interface BreadcrumbCompProps extends BreadcrumbProps{
}

const BreadCrumbComp : React.FC<BreadcrumbCompProps> = (props) => {
  return (
    <Breadcrumb className='breadcrumb-custom' {...props}/>
  )
}

export default BreadCrumbComp
