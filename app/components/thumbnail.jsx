import Link from 'next/link';

const Thumbnail= ({movie}) => {
    return (
        <Link href={`/movie/details/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
        </Link>
    )
}

export default Thumbnail;