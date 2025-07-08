import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { blogData } from '@/app/data/blogData';
// interface BlogDataType {
//     id: number | string,
//     title: string,
//     description: string,
//     image: string,
//     date: string,
//     slug:string
// }
// const blogData: BlogDataType[] = [
//     {
//         id: 1,
//         title: "Our strength, Your Business",
//         description: "Card 1",
//         image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img1.jpg",
//         date: "July 1, 2025",
//         slug: "our-strength,-your-business"
//     },
//     {
//         id: 2,
//         title: "How's the Economy?",
//         description: "Card 2",
//         image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img2.jpg",
//         date: "July 1, 2025",
//         slug: "how's-the-economy?"
//     },
//     {
//         id: 3,
//         title: "Our strength, Your Business",
//         description: "Card 3",
//         image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img3.jpg",
//         date: "July 1, 2025",
//         slug: "our-strength,-your-business"
//     },
//     {
//         id: 4,
//         title: "Our strength, Your Business",
//         description: "Card 4",
//         image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img4.jpg",
//         date: "July 1, 2025",
//         slug: "our-strength,-your-business"
//     },
//     {
//         id: 5,
//         title: "Our strength, Your Business",
//         description: "Card 5",
//         image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img5.jpg",
//         date: "July 1, 2025",
//         slug: "our-strength,-your-business"
//     },
//     {
//         id: 6,
//         title: "Our strength, Your Business",
//         description: "Card 6",
//         image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img6.jpg",
//         date: "July 1, 2025",
//         slug: "our-strength,-your-business"
//     }

// ]
const Blog = () => {

    return (
        <>
            <section style={{ backgroundImage: "url('https://html.designingmedia.com/buyhost/assets/images/subbanner-backgroundimage.jpg')" }} className='px-35 py-23 text-white'>
                <h1 className='text-6xl font-bold'>Blog</h1>
                <p className='my-7 text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing aenean commodo ligula ege.</p>
                <div className='border-1 inline-block px-6 py-1 my-2 border-gray-500'>
                    <p className='text-blue-600'><Link href="/" className='text-white transition duration-700 hover:text-blue-600'>Home</Link> ~ Blog</p>
                </div>
            </section>
            <section className='w-[80%] m-auto '>
                <h1 className='text-center text-5xl font-semibold my-5'>Our Blogs</h1>
                <div className='flex flex-wrap gap-6 my-10'>
                    {blogData.map((item: any) => (
                        <div key={item.id} className='shadow-xl w-[48%]'>
                            <img className='w-[100%] object-cover' src={item.image} alt="" />
                            <div className='p-5'>
                                <p className='flex items-center gap-1.5 text-sm'><FaCalendarAlt size={18} className='inline-block text-blue-700' /> {item.date}</p>
                                <h2 className='text-2xl font-semibold my-2'>{item.title}</h2>
                                <p className='my-2 text-gray-600'>{item.description.slice(0,80)}...</p>
                                <Link href={`/blog/${item.title}`}>
                                    <button className='font-semibold border-b-2'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog