'use client'
import { useStore } from '@/app/store/zustandStore';
import React from 'react'

const EditBlog =  ({ params }: { params: Promise<{ edited: string }> }) => {
    // const slug = params.edited;
    const blogList = useStore((state)=>state.blogs);
    return (
        <div className='d-flex justify-content-center align-items-center flex-column my-4'>
            <h1>Edit Blog</h1>
            <div className="col-6">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Img Url</label>
                        <input type="text" className="form-control" />
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Blog Title</label>
                        <input type="text" className="form-control" />
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Blog Description</label>
                        <input type="text" className="form-control" />
                    </div>
                     <div className="mb-3">
                        <label className="form-label">Data Created</label>
                        <input type="date" className="form-control" />
                    </div>
                    
                    <button type="submit" className="btn btn-outline-primary">Edit Blog</button>
                </form>
            </div>

        </div>
    )
}

export default EditBlog