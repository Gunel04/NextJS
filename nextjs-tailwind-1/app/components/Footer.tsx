import React from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosPin } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="bg-[#001b3b] text-white lg:py-20 py-5">
        <div className="flex flex-col text-center lg:text-left md:w-[80%] w-[50%] m-auto justify-between lg:flex-row">
          <div>
            <h3 className="text-xl font-semibold my-10">Our Services</h3>
            <ul>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Shared Hosting</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Reseller Hosting</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Virtual Private Servers</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Dedicated Hosting</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Domain Registration</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-10">About Us</h3>
            <ul>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Blogs</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">About Us</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">FAQ</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Pricing Plan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-10">Community</h3>
            <ul>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Knowledge Base</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Provacy Policy</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">Acceptable Use Policy</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-10">Mailing Address</h3>
            <ul>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#"><IoIosPin className="text-blue-600 inline-block"/> 121 King Street, Melbourne Victoria 3000 Australia</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#"><FaPhoneAlt  className="text-blue-600 inline-block"/> +61 3 8376 6284</a></li>
              <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#"><FaEnvelope className="text-blue-600 inline-block"/> info@byhost.com</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-[80%] m-auto justify-between mt-15">
          <img className=' my-3' src="https://html.designingmedia.com/buyhost/assets/images/footer-logo.png" alt="" />
          <p className=' my-3'>Copyright {new Date().getFullYear()} DesigningMedia. All Rights Reserved</p>
          <div className="w-[15%] flex justify-center md:justify-between my-3">
            <button className="p-3 border-1 border-blue-600 text-blue-600 transition duration-700 hover:text-white hover:bg-blue-600"><FaFacebookF /></button>
            <button className="p-3 border-1 border-blue-600 text-blue-600 transition duration-700 hover:text-white hover:bg-blue-600"><FaXTwitter /></button>
            <button className="p-3 border-1 border-blue-600 text-blue-600 transition duration-700 hover:text-white hover:bg-blue-600"><FaLinkedinIn /></button>
          </div>
        </div>
      </footer>
  )
}

export default Footer