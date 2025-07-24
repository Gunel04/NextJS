import { getDictionary } from '../dictionaries'
 
export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'az' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  return <button>{dict.pages.home}</button> // Add to Cart
}