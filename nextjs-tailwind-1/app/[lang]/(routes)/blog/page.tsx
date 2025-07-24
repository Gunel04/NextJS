// 'use client'
import React from 'react'
// import { useStore } from '@/app/store/zustandStore';
import { Metadata } from 'next';
// import Link from 'next/link'
// import { useSearchParams } from 'next/navigation';
// import { FaCalendarAlt } from 'react-icons/fa'
import BlogItem from './BlogItem';

export const metadata: Metadata = {
    title: "BuyHost - Blog",
    description: "Stay updated with the latest web hosting tips, tech news, and expert guides. Explore our blog to boost your website’s performance and security."
}

const Blog = ({ params }: { params: { lang: "en" | "az" } }) => {
    // const response = await fetch('http://localhost:3000/api');
    // const blogs = await response.json();

    // const blogs = await fetch('http://localhost:3000/api').then(res => res.json())
    // const blogList = useStore((state) => state.blogs);

    return (
        <>
            <BlogItem params={params} />
        </>
    )
}

export default Blog