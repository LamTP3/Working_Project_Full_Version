import { Select, SelectProps } from 'antd';
import "./SelectComp.scss"
import React from 'react';

interface SelectCompProp extends SelectProps {

}

const SelectComp: React.FC<SelectCompProp> = (props) => {
    return (
        <Select
            {...props}
            className='select-custom'
            placement='bottomLeft'
        />
    )
}

export default SelectComp
