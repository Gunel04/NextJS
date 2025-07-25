'use client'
import React, { useEffect } from 'react'

const Start = () => {
    useEffect(()=>{
        window.location.assign('http://localhost:3000/en')
    },[])
  return (
    <div></div>
  )
}

export default Start