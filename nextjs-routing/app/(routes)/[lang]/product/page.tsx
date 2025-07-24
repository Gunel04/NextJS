import Link from 'next/link';
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Products',
  description: 'Product page',
}
const Product = async () => {
  const response = await fetch("http://localhost:3000/api/product");
  const products = await response.json();
  return (
    <>
    {products.map((item:any)=>(
      <li key={item.id}><Link href={`/product/${item.title}`}>{item.title}</Link></li>
    ))}
    
    </>
  )
}

export default Product