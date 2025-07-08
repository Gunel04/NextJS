import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  return (
    <header className="px-10 py-6 flex items-center justify-between lg:justify-around">
        <img className="w-4xs" src="https://html.designingmedia.com/buyhost/assets/images/logo.png" alt="" />
        <ul className="hidden lg:flex lg:justify-between lg:w-sm">
          <li><Link className="transition duration-600 hover:text-blue-600" href="/">Home</Link></li>
          <li><Link className="transition duration-600 hover:text-blue-600" href="/about">About Us</Link></li>
          <li><a className="transition duration-600 hover:text-blue-600" href="#">Hosting</a></li>
          <li><Link className="transition duration-600 hover:text-blue-600" href="/blog">Blog</Link></li>
          <li><a className="transition duration-600 hover:text-blue-600" href="#">Contact Us</a></li>
        </ul>
        <div className="w-1/6  flex items-center justify-between">
          <button className=" hidden lg:block text-blue-600 border-1 border-blue-200 py-2 px-4 transition duration-600 hover:bg-blue-600 hover:text-white">Sign In</button>
          <button className=" hidden lg:block border-1 border-blue-200 p-2 transition duration-600 hover:bg-blue-600 hover:text-white"><BsCart3 size={22} /></button>
          <button className=" hidden lg:block border-1 border-blue-200 p-2 transition duration-600 hover:bg-blue-600 hover:text-white"><IoSearch size={22} /></button>
          <button className="border-1 border-blue-200 p-2 bg-blue-600 text-white transition duration-600 hover:bg-white hover:text-blue-600"><RxHamburgerMenu size={22} /></button>
        </div>
      </header>
  )
}

export default Header