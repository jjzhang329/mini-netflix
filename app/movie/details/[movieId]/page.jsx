import MovieDetail from '@/app/components/movieDetial'
import styles from '@/app/page.module.scss'

const MoviePage = ({params})=>{
    return (
        <MovieDetail id={params.movieId} />
    )
}

export default MoviePage