import { getDictionary } from '../dictionaries'

export default async function About({params}: {params: Promise<{ lang: 'en' | 'az' }>}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  return (
    <button>{dict.pages.about}</button>
  )// Add to Cart
}