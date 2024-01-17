import Carousel from './components/carousel';

const Movies = async () => {
    try {
        const res = await fetch(`http://www.omdbapi.com/?s=movie&type=movie&apikey=${process.env.OMDB_API_KEY}`);
        const data = await res.json();
        const movies = data.Search.slice(0, 6)
        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        return (
            <Carousel movies={movies} />
        )
    } catch (error) {
        return (
            <div>
                <p>Error loading movies. Please try again later.</p>
            </div>
        );
    }
}

export default Movies