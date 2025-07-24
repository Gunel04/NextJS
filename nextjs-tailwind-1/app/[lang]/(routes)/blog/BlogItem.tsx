'use client'
import { useStore } from '@/app/store/zustandStore';
import Link from 'next/link';
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { getDictionary } from '../../dictionaries';

const BlogItem = async({ params }: { params: { lang: "en" | "az" } }) => {
    const blogList = useStore((state) => state.blogs);
    // const { lang } = await params;
    // const dict = await getDictionary(lang);
    return (
        <>

            <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subbanner-backgroundimage.jpg')" }} className='w-[100%] sm:text-center px-20 py-15 md:px-35 md:py-23 lg:text-left text-white'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>Blog</h1>
                <p className='my-7 sm:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing aenean commodo ligula ege.</p>
                <div className='border-1 inline-block px-6 py-1 my-2 border-gray-500'>
                    <p className='text-blue-600'><Link href="/" className='text-white transition duration-700 hover:text-blue-600'>Home</Link> ~ Blog</p>
                </div>
            </section>
            <section className='w-[80%] m-auto '>
                <h1 className='text-center md:text-5xl text-3xl font-semibold my-5'>Our Blogs</h1>
                <div className='flex flex-wrap gap-6 my-10'>
                    {blogList.map((item: any) => (
                        <div key={item.id} className='shadow-xl md:w-[48%] w-[100%]'>
                            <img className='w-[100%] object-cover' src={item.image} alt="" />
                            <div className='p-5'>
                                <p className='flex items-center gap-1.5 text-sm'><FaCalendarAlt size={18} className='inline-block text-blue-700' /> {item.date}</p>
                                <h2 className='text-2xl font-semibold my-2'>{item.title}</h2>
                                <p className='my-2 text-gray-600'>{item.description.slice(0, 80)}...</p>
                                <Link href={`/blog/${item.title}`}>
                                    <button className='font-semibold border-b-2'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section></>
    )
}

export default BlogItem