import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';


interface LayoutProp {
    children: React.ReactNode;
}
const LayoutRoute = ({ children }: LayoutProp) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default LayoutRoute