import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// interface RouteLayoutProp {
//     children: React.ReactNode;
// }

const RouteLayout = ({ children, params }: { children: React.ReactNode, params: { lang: "en" | "az" } }) => {
    return (
        <>
            <Header params={params} />
            <div>{children}</div>
            <Footer params={params} />
        </>
    )
}

export default RouteLayout