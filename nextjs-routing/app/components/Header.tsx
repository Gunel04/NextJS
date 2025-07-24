import React from 'react'
import { getDictionary } from '../(routes)/[lang]/dictionaries';

const Header = async ({ lang }: { lang: "en" | "az" }) => {
  const dict = await getDictionary(lang);
  return (
    <div>{dict.pages.home}</div>
  )
}

export default Header;
