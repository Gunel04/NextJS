import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RouteLayoutProp {
    children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProp) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default RouteLayout