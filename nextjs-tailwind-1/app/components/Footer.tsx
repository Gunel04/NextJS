import React from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosPin } from 'react-icons/io'
import { getDictionary } from '../[lang]/dictionaries'

const Footer = async ({ params }: { params: { lang: "en" | "az" } }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <footer className="bg-[#001b3b] text-white lg:py-20 py-5">
      <div className="flex flex-col text-center lg:text-left md:w-[80%] w-[50%] m-auto justify-between lg:flex-row">
        <div>
          <h3 className="text-xl font-semibold my-10">{dict.footer.firstPart.name}</h3>
          <ul>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.firstPart.listItemOne}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.firstPart.listItemTwo}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.firstPart.listItemThree}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.firstPart.listItemFour}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.firstPart.listItemFive}</a></li>
            
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-10">{dict.footer.secondPart.name}</h3>
          <ul>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.secondPart.listItemOne}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.secondPart.listItemTwo}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.secondPart.listItemThree}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.secondPart.listItemFour}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-10">{dict.footer.thirdPart.name}</h3>
          <ul>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.thirdPart.listItemOne}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.thirdPart.listItemTwo}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.thirdPart.listItemThree}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#">{dict.footer.thirdPart.listItemFour}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-10">{dict.footer.fourthPart.name}</h3>
          <ul>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#"><IoIosPin className="text-blue-600 inline-block" /> {dict.footer.fourthPart.address}</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#"><FaPhoneAlt className="text-blue-600 inline-block" /> +61 3 8376 6284</a></li>
            <li className="my-2 transition duration-700 hover:text-blue-600"><a href="#"><FaEnvelope className="text-blue-600 inline-block" /> info@buyhost.com</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center w-[80%] m-auto justify-between mt-15">
        <img className=' my-3' src="https://html.designingmedia.com/buyhost/assets/images/footer-logo.png" alt="" />
        <p className=' my-3'>{dict.footer.copyright}</p>
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