import React, { useState, useEffect } from 'react';
import useDebounce from "../hooks/UseDebounce"; 

function Features({ searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=100', {
          headers: {
            'X-API-KEY': 'HAYC7RP-PWRMQ3X-GX54BNM-7HXDFAF'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.docs);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.name?.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <div className='mb-32'>
      <h2 className='text-white font-small text-3xl mt-8 ml-9'>Recommended for you</h2>
      <div className="container mx-auto max-w-[1280px] grid grid-cols-4 gap-12 ml-9">
        {loading ? (
          <p className=' text-xl'>Loading movies...</p>
        ) : (
          filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <div key={movie.id} className="cards relative mt-10 w-[280px] h-[200px]">
                <span className='absolute left-[230px] cursor-pointer top-4 w-10 h-10 bg-gray-700 opacity-[50%] rounded-[50%]'>
                  <i className="fa-regular fa-bookmark ml-[14px] mt-[12px] text-white"></i>
                </span>
                {movie.poster && movie.poster.url ? (
                  <img src={movie.poster?.url} alt={movie.title || 'Movie Poster'} className='rounded-xl w-full h-[174px]' />
                ) : (
                  <div className='bg-gray-700 rounded-xl w-full h-[174px] flex items-center justify-center'>
                    <p className=''>No Image</p>
                  </div>
                )}
                <h3 className=' font-bold'>{movie.year} Movie PG</h3>
                <h3 className=' font-bold'>{movie.name || 'No Title Available'}</h3>
              </div>
            ))
          ) : (
            <p className=' text-xl'>No movies found</p>
          )
        )}
      </div>
    </div>
  );
}

export default Features;
