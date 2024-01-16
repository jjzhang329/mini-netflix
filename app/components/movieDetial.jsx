const MovieDetail = async ({id}) => {
    const movie = await fetchMovie(id)
    console.log(movie)
    return(
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="Title">
                Name: {movie.Title}
            </div>
            <div className="Plot">
                Description: {movie.Plot}
            </div>
            <div className="Rating">
                Ratings: {movie.imdbRating}
            </div>
        </div>


    )
}

const fetchMovie = async(id) => {
   const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`)
   return await res.json()
}
export default MovieDetail;