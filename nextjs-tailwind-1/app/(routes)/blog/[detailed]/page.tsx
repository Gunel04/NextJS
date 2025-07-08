import { log } from 'console';
import Link from 'next/link'
import React from 'react'
import { blogData } from '@/app/data/blogData';
import { FaCalendarAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const BlogDetails = async ({ params }: { params: Promise<{ detailed: string }> }) => {
    const slug = (await params).detailed;
    const decodedSlug = decodeURIComponent(slug).toLowerCase();
    console.log(slug);

    console.log(decodedSlug);

    const singleBlog = blogData.find(b => b.title === decodedSlug.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" "));
    //       const matchedBlog = blogData.find(blog =>
    //     blog.title.toLowerCase().replace(/\s+/g, '-') === decodedSlug
    //   );
    // console.log(typeof decodedSlug);
    // for (let i = 0; i < decodedSlug.length; i++) {
    //     if(decodedSlug[i] === " "){
    //         decodedSlug[i+1] = decodedSlug[i+1].toUpperCase();
    //     }
    // }



    return (
        <>
            <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subbanner-backgroundimage.jpg')" }} className='w-[100%] sm:text-center px-20 py-15 md:px-35 md:py-23 lg:text-left text-white'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>{decodedSlug.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")}</h1>
                <p className='my-7 sm:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing aenean commodo ligula ege.</p>
                <div className='border-1 inline-block px-6 py-1 my-2 border-gray-500'>
                    <p className='text-blue-600'><Link href="/" className='text-white transition duration-700 hover:text-blue-600'>Home</Link> ~ Blog</p>
                </div>
            </section>
            <section className='m-auto sm:w-[80%]  my-20 flex flex-col gap-5 lg:flex-row'>
                <div className='w-[100%] shadow-xl p-5 lg:w-[65%]'>
                    <img className='w-[100%] object-cover' src={singleBlog?.image} alt="" />
                    <h1 className='text-3xl font-semibold my-2'>{singleBlog?.title}</h1>
                    <p className='my-4 flex items-center gap-1.5 text-sm'><FaCalendarAlt size={18} className='inline-block text-blue-700' /> {singleBlog?.date}</p>
                    <p className='text-gray-600'>{singleBlog?.description}</p>
                </div>
                <div className='lg:w-[34%] w-[100%]'>

                    <div className='w-[100%] p-10  mb-10 shadow-xl'>
                        <h1 className='text-3xl text-center font-semibold py-3 border-b-2 border-b-gray-400'>Search News</h1>
                        {/* <hr /> */}
                        <div className='flex items-center justify-between  my-3 '>
                            <input type="text" placeholder='Search Here...' className=' pl-3 h-12 border-1 border-gray-300 w-[100%] border-r-0' />
                            <div className='bg-blue-600 text-white h-12 flex items-center w-15 justify-center transition duration-700 hover:bg-[#001b3b]'>
                                <FaSearch size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] p-10  mb-10 shadow-xl'>
                        <h1 className='text-3xl text-center font-semibold py-3 border-b-1 border-b-gray-400'>Follow Us</h1>
                        <div className='w-[100%] flex justify-around mt-8 '>
                            <button className='bg-blue-600 p-4 text-lg rounded-3xl text-white transition duration-700 hover:bg-[#001b3b]'><FaLinkedinIn /></button>
                            <button className='bg-blue-600 p-4 text-lg rounded-3xl text-white transition duration-700 hover:bg-[#001b3b]'><FaInstagram  /></button>
                            <button className='bg-blue-600 p-4 text-lg rounded-3xl text-white transition duration-700 hover:bg-[#001b3b]'><FaFacebookF /></button>
                            <button className='bg-blue-600 p-4 text-lg rounded-3xl text-white transition duration-700 hover:bg-[#001b3b]'><FaXTwitter  /></button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
// decodedSlug.split('-').map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")
export default BlogDetails