import Image from 'next/image'
import styles from './page.module.css'
import Headers from './Components/Header'
import Results from './Components/Results';

const API_KEY=process.env.API_KEY;
export default async function Home({searchParams}) {
  const genre= searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{ next: { revalidate: 10000 } }
  );
  const data=await res.json();
  const result =data.results;
  if(!res.ok){
    throw new Error('something went wrong') 
  }
  return (
    
      <div className="">
      <Results results={result} />
        
      </div>
    
  )
}
