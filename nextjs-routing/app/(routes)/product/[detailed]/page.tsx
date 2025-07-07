import React from 'react'

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