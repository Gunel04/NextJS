'use client' 
import React from 'react'
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
export const metadata: Metadata = {
  title: 'About',
  description: '...',
}
const About = () => {
  const path = usePathname();
  return (
    <div>
      <h1>About</h1>
      <p>{path}</p>
    </div>
  )
}

export default About