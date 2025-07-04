import React from 'react'

const MoreDetails = async ({ params }: { params: Promise<{ moredetails: string }> }) => {

    const slug = (await params).moredetails;
    return (
        <div>{slug}</div>
    )
}

export default MoreDetails