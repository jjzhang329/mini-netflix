import Link from 'next/link';
import styles from '@/app/page.module.scss'
import Image
 from 'next/image';
const Thumbnail= ({movie}) => {
    return (
        <div className={styles['movie-poster-container']}>
            <h2 className={styles['movie-heading']}>Mini Netflit Movies</h2>
            <Link href={`/movie/details/${movie.imdbID}`}>
                <Image className={styles.poster} src={movie.Poster} alt={movie.Title} width={470} height={600}/>
            </Link>
            <div className={styles['movie-title']}>{movie.Title}</div>
        </div>
    )
}

export default Thumbnail;