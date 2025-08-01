import { FaCircleCheck, FaXTwitter } from 'react-icons/fa6'
import { getDictionary } from './dictionaries'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default async function Page({ params }: {
  params: { lang: 'en' | 'az' }
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  return (
    <>
      <Header params={params} />
      <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/banner-backgroundimage.jpg')" }} className="text-white flex justify-between p-20 md:p-35 flex-col md:flex-row">
        <div className="md:w-1/2 w-[100%] text-center md:text-left">
          <h6 className="text-blue-600 text-xl font-semibold">{dict.pages.home.hero.subheading}</h6>
          <h1 className="md:text-5xl sm:text-4xl my-5 font-bold">{dict.pages.home.hero.heading}</h1>
          <p className="text-xl">{dict.pages.home.hero.paragraphOne}</p>
          <p className="text-xl">{dict.pages.home.hero.paragraphTwo}</p>
          <button className="my-10 px-12 py-5 bg-blue-600 text-md font-semibold  transition duration-600 hover:bg-white hover:text-black">{dict.pages.home.hero.button}</button>
          <div className="w-1/3 flex justify-between m-auto md:m-0">
            <button className="bg-blue-600 p-4 rounded-3xl transition duration-600 hover:bg-white hover:text-black"><FaFacebookF /></button>
            <button className="bg-blue-600 p-4 rounded-3xl transition duration-600 hover:bg-white hover:text-black"><FaXTwitter /></button>
            <button className="bg-blue-600 p-4 rounded-3xl transition duration-600 hover:bg-white hover:text-black"><FaInstagram /></button>
          </div>
        </div>
        <div className="md:w-1/2 w-[100%]">
          <img src="https://html.designingmedia.com/buyhost/assets/images/banner-image1.jpg" alt="" className="w-1/2 lg:ml-71 lg:mx-0 my-5 mx-auto rounded-tl-4xl rounded-br-4xl" />
          <img src="https://html.designingmedia.com/buyhost/assets/images/banner-image2.jpg" alt="" className="lg:mr-20 my-5 lg:mx-0 mx-auto rounded-tl-4xl rounded-br-4xl" />
        </div>
      </section>
      <section className="w-[80%] m-auto">
        <h1 className="text-center text-4xl font-bold my-5">{dict.pages.home.secondPart.heading}</h1>
        <p className="text-center my-3 text-xl text-gray-500">{dict.pages.home.secondPart.text}</p>
        <div className="flex flex-col md:flex-row my-20">
          <div className="text-center transition duration-500 hover:shadow-2xl  w-[100%]">
            <img className="m-auto opacity-70 transition duration-700 hover:opacity-100" src="https://html.designingmedia.com/buyhost/assets/images/plan-icon1.png" alt="" />
            <div className="px-10">
              <h2 className="text-2xl font-semibold">{dict.pages.home.secondPart.packages.firstPackage.name}</h2>
              <p className="text-lg text-gray-600 my-4">{dict.pages.home.secondPart.packages.firstPackage.description}</p>
              <h1 className="text-3xl text-blue-600">$19.99 /month</h1>
              <ul>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.firstPackage.first}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.firstPackage.second}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.firstPackage.third}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.firstPackage.fourth}</li>
              </ul>
              <button className="my-3 text-lg border-1 py-4 px-9 font-medium transition duration-600 hover:text-white hover:bg-blue-950">{dict.pages.home.secondPart.packages.firstPackage.button}</button>
            </div>
          </div>
          <div className="text-center transition duration-500 hover:shadow-2xl w-[100%]">
            <img className="m-auto opacity-70 transition duration-700 hover:opacity-100" src="https://html.designingmedia.com/buyhost/assets/images/plan-icon2.png" alt="" />
            <div className="px-10">
              <h2 className="text-2xl font-semibold">{dict.pages.home.secondPart.packages.secondPackage.name}</h2>
              <p className="text-lg text-gray-600 my-4">{dict.pages.home.secondPart.packages.secondPackage.description}</p>
              <h1 className="text-3xl text-blue-600">$26.99 /month</h1>
              <ul>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.secondPackage.first}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.secondPackage.second}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.secondPackage.third}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.secondPackage.fourth}</li>
              </ul>
              <button className="my-3 text-lg border-1 py-4 px-9 font-medium transition duration-600 hover:text-white hover:bg-blue-950">{dict.pages.home.secondPart.packages.secondPackage.button}</button>
            </div>
          </div>
          <div className="text-center transition duration-500 hover:shadow-2xl w-[100%]">
            <img className="m-auto opacity-70 transition duration-700 hover:opacity-100" src="https://html.designingmedia.com/buyhost/assets/images/plan-icon3.png" alt="" />
            <div className="px-10">
              <h2 className="text-2xl font-semibold">{dict.pages.home.secondPart.packages.thirdPackage.name}</h2>
              <p className="text-lg text-gray-600 my-4">{dict.pages.home.secondPart.packages.thirdPackage.description}</p>
              <h1 className="text-3xl text-blue-600">$48.99 /month</h1>
              <ul>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.thirdPackage.first}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.thirdPackage.second}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.thirdPackage.third}</li>
                <li className="my-2 text-lg text-gray-600">{dict.pages.home.secondPart.packages.thirdPackage.fourth}</li>
              </ul>
              <button className="my-3 text-lg border-1 py-4 px-9 font-medium transition duration-600 hover:text-white hover:bg-blue-950">{dict.pages.home.secondPart.packages.thirdPackage.button}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[80%] mx-auto flex flex-col md:flex-row justify-around bg-[#001b3b] text-white my-20 py-10">
        <div className="mx-auto my-2">
          <p className="text-xl flex items-center gap-2"><FaCircleCheck className="inline-block text-blue-600" /> 24/7 Customer Support</p>
        </div>
        <div className="mx-auto my-2">
          <p className="text-xl flex items-center gap-2"><FaCircleCheck className="inline-block text-blue-600" /> 1-Click Install</p>
        </div>
        <div className="mx-auto my-2">
          <p className="text-xl flex items-center gap-2"><FaCircleCheck className="inline-block text-blue-600" /> 99.9% Uptime Guarantee</p>
        </div>
      </section>
      <Footer params={params} />
    </>
  )
}