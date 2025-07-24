import { getDictionary } from './dictionaries'
 
export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'az' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  return <button>{dict.products.cart}</button> // Add to Cart
}