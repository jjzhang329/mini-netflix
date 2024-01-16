'use client'
import { useSearchParams, SearchParams, useParams } from "next/navigation";
import MovieDetail from "@/app/components/movieDetial";

const MovieDetailPage = () => {
  const searchParams = useSearchParams()
  const movieId =searchParams.get('movieId')

  return (
    <MovieDetail id={movieId} />
  )
}

export default MovieDetailPage
