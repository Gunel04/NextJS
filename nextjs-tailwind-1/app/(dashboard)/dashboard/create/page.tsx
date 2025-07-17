'use client'
import { useStore } from '@/app/store/zustandStore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlog = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const addBlog = useStore((state) => state.addingBlog);
    const blogList = useStore((state) => state.blogs);
    const router = useRouter();
    const formSubmit = (e: React.FormEvent) => {
        console.log(blogList);

        e.preventDefault();
        addBlog(Date.now(), image, title, description, date);
        router.push('/dashboard');
    }
    return (
        <div className='d-flex justify-content-center align-items-center flex-column my-4'>
            <h1>Add Blog</h1>
            <div className="col-6 my-3">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Image Url</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter image url...' onChange={e => setImage(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Blog Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter blog title...' onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Blog Description</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter blog description...' onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Date Created</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" placeholder='Enter date blog created...' onChange={e => setDate(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Create</button>
                </form>
            </div>


        </div>
    )
}

export default CreateBlog