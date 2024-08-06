import { Tabs } from 'antd';
import React from 'react';
import type { TabsProps } from 'antd';
import './TabsComp.scss'


interface TabsCompProp extends TabsProps {

}

const TabsComp: React.FC<TabsCompProp> = (props) => {

    return (
        <Tabs {...props} className='tabs-custom' />
    )
}

export default TabsComp
