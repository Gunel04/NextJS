import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Product Details',
  description: 'This page describes product details page',
}
const ProductDetail = async ({ params }: { params: Promise<{ detailed: string }> }) => {
    const slug = (await params).detailed;
    return (
        <>
            <div>ProductDetail</div>
            <h1>{slug}</h1>
        </>
    )
}

export default ProductDetail