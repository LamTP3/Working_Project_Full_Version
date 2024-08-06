import React from 'react'
import "./LogoComp.scss"

type Prop = {
    size: 'small' | 'medium' | 'large';
}

// small: 40px, medium: 50px, large: 100px

const LogoComp: React.FC<Prop> = ({size}) => {
    return (
        <div className={`logo-custom ${size}`}></div>
    )
}

export default LogoComp
