import MovieDetail from '@/app/components/movieDetial'

export default function({params}){

    return (
        <MovieDetail id={params.movieId} />
    )
}