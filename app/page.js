import Thumbnail from '@/app/components/thumbnail';

const Movies = async () => {
    const res = await fetch(`http://www.omdbapi.com/?s=movie&type=movie&apikey=${process.env.OMDB_API_KEY}`);
    const data = await res.json();
    const movies = data.Search.slice(0,7)

    return (
        <div>
            {movies.map(movie=>{
                return <Thumbnail key={movie.imdbID} movie={movie} />
            })}
        </div>
    )
}

export default Movies