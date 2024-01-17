import styles from '@/app/components/detail.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const MovieDetail = async ({id}) => {
    const movie = await fetchMovie(id)
    const genres = (movie?.Genre)?.split(',')
    return(
        <div className={styles['movie-detail-container']}>
            <section className={styles['left-section']}>
                < h2 className={styles.title}>{movie.Title}</h2>
                <div className={styles["genre-container"]}>
                    {
                        genres?.map((genre, idx) => {
                            return (
                            <span key={idx}>{genre}  
                                <span className={styles.genre}>{idx === genres?.length - 1 ? "" : "|"}</span> 
                            </span>
                            )
                        })
                    }
                </div>
                <section className={styles.rating}>
                    IMDb Rating: {movie.imdbRating} / 10
                </section>
                <section>
                    <h3>Movie Description: </h3>
                    <article className={styles.plot}>{movie.Plot} </article>
                </section>
                <Link href='/'>
                    <button>Back To Movies</button>
                </Link>
            </section>
            <aside className={styles['right-section']}>
                <Image src={movie.Poster} alt={movie.Title} width={470} height={600} />
            </aside>
            
        </div>

    )
}

const fetchMovie = async(id) => {
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`)
        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        return await res.json()
    }catch(error){
        <div>
            <p>Error loading movie. Please try again later.</p>
        </div>
    }
}
export default MovieDetail;