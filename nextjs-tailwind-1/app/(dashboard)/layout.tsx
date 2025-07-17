import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

interface NoLayoutType {
    children: React.ReactNode;
}

const NoLayout = ({ children }: NoLayoutType) => {
    return (
        <>
            {children}
        </>
    )
}

export default NoLayout