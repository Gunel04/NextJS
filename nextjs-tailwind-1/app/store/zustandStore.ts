import { create } from "zustand";
interface BlogType {
    id: number,
    image: string,
    title: string,
    description: string,
    date: string
}

interface BlogStoreType {
    blogs: BlogType[],
    addingBlog: (id: number, image: string, title: string, description: string, date: string) => void,
    deletingBlog: (id:number) => void,
    updateBlog: (id:number, newImage:string, newTitle:string, newDescription:string, newDate:string) => void;
}

export const useStore = create<BlogStoreType>((set) => ({
    blogs: [{
        id: Date.now(),
        image:"https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img1.jpg",
        title:"Our Strength, Your Business",
        description:"In today’s fast-paced digital era, businesses need more than just a product or service—they need a reliable partner with the strength to support their ambitions. At the heart of every successful business lies a strong foundation, and our strength is built on years of experience, innovative strategies, and a commitment to client success. This blog explores how our expertise, infrastructure, and customer-centric approach can empower your business to thrive in a competitive landscape. Whether you're a startup looking for guidance or an established company seeking growth, we offer the tools and knowledge to support your journey. From scalable solutions to dedicated support, our strength becomes your advantage. Dive in to discover real-world examples, client success stories, and insights into how strategic partnerships drive progress. Because when your business wins, we win together.",
        date:"2025-06-15"
    }],
    addingBlog: (id, image, title, description, date) => set((state) => ({
        blogs: [...state.blogs, { id, image, title, description, date }]
    })),
    deletingBlog: (id) => set((state)=>({
        blogs: state.blogs.filter((item)=>item.id !== id)
    })),
    updateBlog: (id, newImage, newTitle, newDescription, newDate) => set((state)=>({
        blogs: state.blogs.map((item)=>item.id === id ? {...blogs, image: newImage, title:newTitle, description: newDescription, date: newDate} : blogs)
    }))
}))