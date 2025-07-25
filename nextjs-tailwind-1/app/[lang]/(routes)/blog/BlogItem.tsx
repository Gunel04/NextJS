

import Link from 'next/link';
import React from 'react'

import { getDictionary } from '../../dictionaries';
import BlogMaps from './BlogMaps';

const BlogItem = async ({ params }: { params: { lang: "en" | "az" } }) => {

    const { lang } = await params;
    const dict = await getDictionary(lang);
    return (
        <>

            <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subbanner-backgroundimage.jpg')" }} className='w-[100%] sm:text-center px-20 py-15 md:px-35 md:py-23 lg:text-left text-white'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>{dict.pages.about.blogPage}</h1>
                <p className='my-7 sm:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing aenean commodo ligula ege.</p>
                <div className='border-1 inline-block px-6 py-1 my-2 border-gray-500'>
                    <p className='text-blue-600'><Link href="/" className='text-white transition duration-700 hover:text-blue-600'>Home</Link> ~ Blog</p>
                </div>
            </section>
            <BlogMaps lang={lang} />
        </>
    )
}

export default BlogItem