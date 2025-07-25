'use client'
import React from 'react'
import { useStore } from '@/app/store/zustandStore';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
type propType = {
    lang:string
}
const BlogMaps = ({lang}:propType) => {
    const blogList = useStore((state) => state.blogs);
    return (
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
                            <Link href={`/${lang}/blog/${item.title}`}>
                                <button className='font-semibold border-b-2'>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BlogMaps