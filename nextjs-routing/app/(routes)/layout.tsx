import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

// interface RoutesProps {
//   children: React.ReactNode;
// }

const Home = ({ children, params }: { children: React.ReactNode, params: { lang: "en" | "az" } }) => {
  return (
    <>
      <Header lang={params.lang} />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Home