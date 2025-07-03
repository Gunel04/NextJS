import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  return (
    <>
      <header className="p-10 flex items-center justify-around">
        <img className="w-4xs" src="https://html.designingmedia.com/buyhost/assets/images/logo.png" alt="" />
        <ul className="flex justify-between w-sm">
          <li><a className="hover:text-blue-600" href="#">Home</a></li>
          <li><a className="hover:text-blue-600" href="#">Hosting</a></li>
          <li><a className="hover:text-blue-600" href="#">Pages</a></li>
          <li><a className="hover:text-blue-600" href="#">Blog</a></li>
          <li><a className="hover:text-blue-600" href="#">Contact Us</a></li>
        </ul>
        <div className="w-1/6  flex items-center justify-between">
          <button className="text-blue-600 border-1 border-blue-200 py-2 px-4">Sign In</button>
          <button className="border-1 border-blue-200 p-2"><BsCart3 size={22}/></button>
          <button className="border-1 border-blue-200 p-2"><IoSearch size={22}/></button>
          <button className="border-1 border-blue-200 p-2 bg-blue-600 text-white"><RxHamburgerMenu size={22}/></button>
        </div>
      </header>
    </>

  );
}
