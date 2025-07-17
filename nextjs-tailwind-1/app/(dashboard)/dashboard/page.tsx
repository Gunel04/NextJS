'use client'
import { useStore } from '@/app/store/zustandStore'
import Link from 'next/link';
import React from 'react'

const Dashboard = () => {
    const blogList = useStore((state) => state.blogs);
    const deletingBlog = useStore((state) => state.deletingBlog);
    return (
        <div className='d-flex align-items-center justify-content-center flex-column my-4 container-fluid'>
            <h1>Blog Dashboard</h1>
            <div className="col-12 my-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogList.map((item: any, index: number) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><img src={item.image} alt={item.title} width={100} /></td>
                                <td>{item.title}</td>
                                <td>{item.description.slice(0, 95)}...</td>
                                <td>{item.date}</td>
                                <td><Link href={`/blog/${item.title}`} className='btn btn-info'>Show</Link><Link href={`/dashboard/edit/${item.title}`} className='btn btn-warning mx-3'>Edit</Link><button type='button' onClick={()=>{deletingBlog(item.id)}} className='btn btn-danger'>X</button></td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                <Link href='/dashboard/create' className='btn btn-outline-info'>Create New Blog</Link>
                <Link href='/blog' className='btn btn-outline-info mx-2'>Blogs Page</Link>
            </div>

        </div>
    )
}

export default Dashboard