// 'use client'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { getDictionary } from '../[lang]/dictionaries'
import Language from './Language'

const Header = async ({ params }: { params: { lang: "en" | "az" } }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  // const pathName = usePathname();
  // console.log(pathName);
  // const headerComponents = [
  //   {
  //     href: "/",
  //     name: "Home"
  //   },
  //   {
  //     href: "/about",
  //     name: "About Us"
  //   },
  //   {
  //     href: "/hosting",
  //     name: "Hosting"
  //   },
  //   {
  //     href: "/blog",
  //     name: "Blog"
  //   },
  //   {
  //     href: "/contactus",
  //     name: "Contact Us"
  //   }
  // ]
  return (
    <header className="px-10 py-6 flex items-center justify-between lg:justify-around">
      <img className="w-4xs" src="https://html.designingmedia.com/buyhost/assets/images/logo.png" alt="" />
      <ul className="hidden lg:flex lg:justify-between lg:w-sm">
        <li><Link className='transition duration-600 hover:text-blue-600' href={`/${lang}/home`}>{dict.header.home}</Link></li>
        <li><Link className='transition duration-600 hover:text-blue-600' href={`/${lang}/about`}>{dict.header.about}</Link></li>
        <li><Link className='transition duration-600 hover:text-blue-600' href={`/${lang}/hosting`}>{dict.header.hosting}</Link></li>
        <li><Link className='transition duration-600 hover:text-blue-600' href={`/${lang}/blog`}>{dict.header.blog}</Link></li>
        <li><Link className='transition duration-600 hover:text-blue-600' href={`/${lang}/contactus`}>{dict.header.contact}</Link></li>
        {/* {headerComponents.map((item, index) => (

        ))} */}
      </ul>
      <div className="w-1/6  flex items-center justify-between">
       <Language currentLang={lang}/>

        <form action="/search" method='GET' className='flex items-center justify-between'>
          <input type="search" className='border-1 p-2' name='keyword' placeholder='Search title...' />
          {/* <button className=" hidden lg:block border-1 border-blue-200 p-2 transition duration-600 hover:bg-blue-600 hover:text-white"><IoSearch size={24} /></button>
          <button className=" hidden lg:block border-1 border-blue-200 p-2 transition duration-600 hover:bg-blue-600 hover:text-white"><BsCart3 size={24} /></button>
          <button className="border-1 border-blue-200 p-2 bg-blue-600 text-white transition duration-600 hover:bg-white hover:text-blue-600"><RxHamburgerMenu size={24} /></button> */}
        </form>
      </div>

    </header>
  )
}

export default Header