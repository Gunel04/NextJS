import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '../dictionaries';
 

const Contact = async({params}:{params:Promise<{lang: 'en' | 'az'}>}) => {
  const {lang} = await params;
  const dict = await getDictionary(lang);
  return (
    <div>{dict.pages.contact}</div>
  )
}

export default Contact