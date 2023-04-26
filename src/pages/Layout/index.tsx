
import React from 'react';

interface IProps {
    children: React.ReactNode
}
const Layout = ({ children }: IProps) => {

    return (
        <div style={{ height: '100%'}}>
            <div style={{ height: '60px', border: 'solid 1px #ccc '}}>这里是头部</div>
            {children}
        </div>
    )
}

export default Layout