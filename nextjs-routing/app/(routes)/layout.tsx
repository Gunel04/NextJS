import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RoutesProps {
  children: React.ReactNode;
}

const Home = ({ children }: RoutesProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Home