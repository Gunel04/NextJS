import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
  title : "BuyHost - About",
  description:"Learn more about our mission, experience, and the team behind your trusted hosting service. We're committed to powering your digital success."
}

const About = () => {
  return (
    <>
      <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subbanner-backgroundimage.jpg')" }} className='p-45 text-white'>
        <h1 className='text-6xl font-bold'>About Us</h1>
        <p className='my-7 text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing aenean commodo ligula ege.</p>
        <div className='border-1 inline-block px-6 py-1 my-2 border-gray-500'>
          <p className='text-blue-600'><a href="#" className='text-white transition duration-700 hover:text-blue-600'>Home</a> ~ About Us</p>
        </div>
      </section>
      <section className='flex justify-between w-[80%] m-auto -mt-15 mb-15 gap-6 '>
        <div className='bg-white w-[90%] m-auto p-10 border-1 border-blue-200 transition duration-600 hover:border-blue-600'>
          <img src="https://html.designingmedia.com/buyhost/assets/images/aboutdetail-icon1.png" alt="" />
          <h3 className='text-2xl font-semibold my-5'>Our Mission</h3>
          <p className='text-gray-500 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ex ea commodo consequat.</p>
        </div>
        <div className='bg-white w-[90%] m-auto p-10 border-1 border-blue-200 transition duration-600 hover:border-blue-600'>
          <img src="https://html.designingmedia.com/buyhost/assets/images/aboutdetail-icon2.png" alt="" />
          <h3 className='text-2xl font-semibold my-5'>Our Vision</h3>
          <p className='text-gray-500 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ex ea commodo consequat.</p>
        </div>
      </section>
      <section className='w-[80%] mx-auto my-15 gap-5 flex'>
        <div className='w-[25%]'>
          <h3 className='text-2xl text-blue-500 font-bold'>About Us</h3>
          <h1 className='text-5xl font-semibold my-3'>Hosting Empowered</h1>
          <p className='text-gray-500 text-md'>Our hosting solutions range from web hosting to blazing fast shared hosting.</p>
        </div>
        <div className='w-[23%] text-center px-10 pt-8 bg-blue-50 rounded-xl'>
          <h1 className='text-5xl font-semibold'>17K+</h1>
          <p>Trusted by thousands of happy customers</p>
          <img className='bg-blue-500 rounded-lg py-2 px-6 my-3 m-auto' src="https://html.designingmedia.com/buyhost/assets/images/about-detailstar.png" alt="" />
        </div>
        <div className='w-[50%]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseque irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </section>
      <section className='bg-blue-50 pb-20'>
        <div className='w-[80%] m-auto'>
          <div className='text-center pt-20 pb-10'>
            <h1 className='text-5xl font-semibold'>Our Support knows No Boundaries</h1>
            <p className='text-lg text-gray-500 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className='flex gap-5'>
            <div className='bg-white p-10 border-1 border-white transition duration-700 hover:border-1 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-300'>
              <img src="https://html.designingmedia.com/buyhost/assets/images/support-icon1.png" alt="" />
              <h3 className='font-bold text-xl my-5'>We Host Worldwide</h3>
              <p className='text-gray-500 text-md'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eignim fugiat nulla pariatur.</p>
            </div>
            <div className='bg-white p-10 border-1 border-white transition duration-700 hover:border-1 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-300'>
              <img src="https://html.designingmedia.com/buyhost/assets/images/support-icon2.png" alt="" />
              <h3 className='font-bold text-xl my-5'>Texas Raised</h3>
              <p className='text-gray-500 text-md'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id est laborum.</p>
            </div>
            <div className='bg-white p-10 border-1 border-white transition duration-700 hover:border-1 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-300'>
              <img src="https://html.designingmedia.com/buyhost/assets/images/support-icon3.png" alt="" />
              <h3 className='font-bold text-xl my-5'>24/7/365 Support</h3>
              <p className='text-gray-500 text-md'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eignim fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subfooter-backgroundimage.jpg')" }} className='bg-center'>
        <div className='text-white flex w-[80%] mx-auto py-10 justify-between'>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <h1 className='text-4xl font-bold'>#1</h1>
            </div>
            <div>
              <p className='text-md'>Web Hosting</p>
              <p className='text-md'>Provider</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <h1 className='text-4xl font-bold'>50+</h1>
            </div>
            <div>
              <p className='text-md'>Worldwide</p>
              <p className='text-md'>Data Center</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <h1 className='text-4xl font-bold'>459K+</h1>
            </div>
            <div>
              <p className='text-md'>Supercharged</p>
              <p className='text-md'>Websites</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <h1 className='text-4xl font-bold'>24/7</h1>
            </div>
            <div>
              <p className='text-md'>Real-time</p>
              <p className='text-md'>Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[80%] mx-auto py-15'>
        <div className='text-center w-[65%] mx-auto'>
          <h1 className='text-5xl font-bold'>Our Global Partners</h1>
          <p className='text-md my-8 text-gray-500'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur rui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className='grid grid-rows-2 grid-cols-4 gap-6'>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner1.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner2.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner3.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner4.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner5.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner6.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner7.png" alt="" className='m-auto' /></div>
          <div className='border-1 border-gray-50 transition duration-700 hover:border-black px-5 py-8 bg-gray-50'><img src="https://html.designingmedia.com/buyhost/assets/images/partner8.png" alt="" className='m-auto' /></div>
        </div>
      </section>

      <section style={{backgroundImage:"url('https://html.designingmedia.com/buyhost/assets/images/subfooter-backgroundimage.jpg')"}} className='text-white bg-center'>
        <div className='w-[80%] mx-auto flex justify-between py-15 items-center'>
          <div>
            <h1 className='text-5xl font-bold my-4'>Build Your Website with Buyhost</h1>
            <p className='my-4 text-lg'>From Professional Business To Enterprise, We’ve Got You Covered!</p>
          </div>
          <div>
            <button className='bg-white text-[#001b3b] transition duration-700 hover:bg-[#001b3b] hover:text-white px-10 py-5 font-semibold'>Get Started</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About