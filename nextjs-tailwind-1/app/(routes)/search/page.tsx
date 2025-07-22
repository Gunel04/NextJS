import { Suspense } from 'react'
import SearchBar from '../../components/SearchBar'

function SearchBarFallback() {
  return <>placeholder</>
}
 
export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          <SearchBar />
        </Suspense>
      </nav>
    </>
  )
}