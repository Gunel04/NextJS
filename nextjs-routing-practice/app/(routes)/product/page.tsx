import Link from 'next/link'
import React from 'react'

const Product = () => {
    const productData = [
        {
            id:1,
            title:"Asus Vivobook",
            price: 1800
        },
        {
            id:2,
            title:"Lenovo Laptop",
            price: 2000
        },
        {
            id:3,
            title:"Hp Computer",
            price: 2200
        },
    ]
  return (
    <div>
        {productData.map(item => (
            <Link><li>{item.title}</li></Link>
        ))}
    </div>
  )
}

export default Product