import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
    return (
        <>
            <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/banner-backgroundimage.jpg')" }} className="text-white flex justify-between p-35">
                <div className="w-1/2">
                    <h6 className="text-blue-600 text-xl font-semibold">----  30-days Money Back Guarantee</h6>
                    <h1 className="text-5xl my-5 font-bold">Reliable Hosting Solutions Tailored for Your Business Needs</h1>
                    <p className="text-xl">Fully Customizable Linux & Windows Hosting</p>
                    <p className="text-xl">Enjoy the lowest prices in the industry.</p>
                    <button className="my-10 px-12 py-5 bg-blue-600 text-md font-semibold  transition duration-600 hover:bg-white hover:text-black">Get Started</button>
                    <div className="w-1/3 flex justify-between">
                        <button className="bg-blue-600 p-4 rounded-3xl transition duration-600 hover:bg-white hover:text-black"><FaFacebookF /></button>
                        <button className="bg-blue-600 p-4 rounded-3xl transition duration-600 hover:bg-white hover:text-black"><FaXTwitter /></button>
                        <button className="bg-blue-600 p-4 rounded-3xl transition duration-600 hover:bg-white hover:text-black"><FaInstagram /></button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="https://html.designingmedia.com/buyhost/assets/images/banner-image1.jpg" alt="" className="w-1/2 ml-71 rounded-tl-4xl rounded-br-4xl" />
                    <img src="https://html.designingmedia.com/buyhost/assets/images/banner-image2.jpg" alt="" className="mr-20 rounded-tl-4xl rounded-br-4xl" />
                </div>
            </section>
            <section className="w-[80%] m-auto">
                <h1 className="text-center text-4xl font-bold my-5">Choose Your Hosting Plan</h1>
                <p className="text-center my-3 text-xl text-gray-500">Empower Your Online Presence with Blazing Fast and Secure Web Hosting!</p>
                <div className="flex my-20">
                    <div className="text-center transition duration-500 hover:shadow-2xl">
                        <img className="m-auto opacity-70 transition duration-700 hover:opacity-100" src="https://html.designingmedia.com/buyhost/assets/images/plan-icon1.png" alt="" />
                        <div className="px-10">
                            <h2 className="text-2xl font-semibold">Shared Hosting</h2>
                            <p className="text-lg text-gray-600 my-4">Fastest SSD based web hosting platform for your websit.</p>
                            <h1 className="text-3xl text-blue-600">$19.99 /month</h1>
                            <ul>
                                <li className="my-2 text-lg text-gray-600">Single <span className="font-semibold">Domain</span></li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">One</span> Click Installs</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">Unlimited</span> Bandwidth</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">SSL</span> Certificate</li>
                            </ul>
                            <button className="my-3 text-lg border-1 py-4 px-9 font-medium transition duration-600 hover:text-white hover:bg-blue-950">Order Now</button>
                        </div>
                    </div>
                    <div className="text-center transition duration-500 hover:shadow-2xl">
                        <img className="m-auto opacity-70 transition duration-700 hover:opacity-100" src="https://html.designingmedia.com/buyhost/assets/images/plan-icon2.png" alt="" />
                        <div className="px-10">
                            <h2 className="text-2xl font-semibold">VPS Hosting</h2>
                            <p className="text-lg text-gray-600 my-4">Fastest SSD based web hosting platform for your websit.</p>
                            <h1 className="text-3xl text-blue-600">$26.99 /month</h1>
                            <ul>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">Domain</span> RAM</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">2 Cores</span> CPU</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">120 GB</span> Disk Space</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">1.5 TB</span> Bandwidth</li>
                            </ul>
                            <button className="my-3 text-lg border-1 py-4 px-9 font-medium transition duration-600 hover:text-white hover:bg-blue-950">Order Now</button>
                        </div>
                    </div>
                    <div className="text-center transition duration-500 hover:shadow-2xl">
                        <img className="m-auto opacity-70 transition duration-700 hover:opacity-100" src="https://html.designingmedia.com/buyhost/assets/images/plan-icon3.png" alt="" />
                        <div className="px-10">
                            <h2 className="text-2xl font-semibold">Dedicated Hosting</h2>
                            <p className="text-lg text-gray-600 my-4">Fastest SSD based web hosting platform for your websit.</p>
                            <h1 className="text-3xl text-blue-600">$48.99 /month</h1>
                            <ul>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">4 GB</span> Memory</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">2 Cores</span> CPU</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">0.5 TB</span> Dsik (RAID-1)</li>
                                <li className="my-2 text-lg text-gray-600"><span className="font-semibold">10 TB</span> Bandwidth</li>
                            </ul>
                            <button className="my-3 text-lg border-1 py-4 px-9 font-medium transition duration-600 hover:text-white hover:bg-blue-950">Order Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[80%] mx-auto flex justify-around bg-[#001b3b] text-white my-20 py-10">
                <div>
                    <p className="text-xl flex items-center gap-2"><FaCircleCheck className="inline-block text-blue-600" /> 24/7 Customer Support</p>
                </div>
                <div>
                    <p className="text-xl flex items-center gap-2"><FaCircleCheck className="inline-block text-blue-600" /> 1-Click Install</p>
                </div>
                <div>
                    <p className="text-xl flex items-center gap-2"><FaCircleCheck className="inline-block text-blue-600" /> 99.9% Uptime Guarantee</p>
                </div>
            </section>
        </>

    );
}
