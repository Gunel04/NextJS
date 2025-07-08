import { log } from 'console';
import Link from 'next/link'
import React from 'react'
import { blogData } from '@/app/data/blogData';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';

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
            <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subbanner-backgroundimage.jpg')" }} className='px-35 py-23 text-white'>
                <h1 className='text-6xl font-bold'>{decodedSlug.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")}</h1>
                <p className='my-7 text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing aenean commodo ligula ege.</p>
                <div className='border-1 inline-block px-6 py-1 my-2 border-gray-500'>
                    <p className='text-blue-600'><Link href="/" className='text-white transition duration-700 hover:text-blue-600'>Home</Link> ~ Blog</p>
                </div>
            </section>
            <section className='w-[80%] m-auto my-20 flex gap-5'>
                <div className='shadow-xl p-5 w-[65%]'>
                    <img className='w-[100%] object-cover' src={singleBlog?.image} alt="" />
                    <h1 className='text-3xl font-semibold my-2'>{singleBlog?.title}</h1>
                    <p className='my-2 flex items-center gap-1.5 text-sm'><FaCalendarAlt size={18} className='inline-block text-blue-700' /> {singleBlog?.date}</p>
                    <p className='text-gray-600'>{singleBlog?.description}</p>

                </div>
                <div className='w-[34%] px-10 '>
                    <h1 className='text-3xl text-center font-semibold py-3 border-b-2'>Search News</h1>
                    {/* <hr /> */}
                    <div className='flex items-center justify-between'>
                        <input type="text" placeholder='Search Here...' />
                        <FaSearch />

                    </div>
                </div>
            </section>
        </>
    )
}
// decodedSlug.split('-').map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")
export default BlogDetails