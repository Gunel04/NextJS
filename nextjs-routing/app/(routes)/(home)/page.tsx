import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}
const Home = () => {
  return (
    <>
      <div>Home page</div>
      <input type="text" placeholder='Name' className='border-1' />
    </>
  )
}

export default Home