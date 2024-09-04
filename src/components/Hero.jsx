import React, { useState, useEffect } from 'react';

function Hero() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setMovies(data.docs.slice(10));
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="mt-[34px] ml-9 w-[122px] h-10 font-normal text-3xl">
        Trending
      </h2>

      <div className="carousel rounded-box container flex gap-4 ml-9 max-w-[1280px] overflow-x-scroll">
        {loading ? (
          <p className='text-xl'>Loading movies...</p>
        ) : (
          movies.map(movie => (
            <div key={movie.id} className="carousel-item">
              <div className="wrappers w-[420px] h-[200px] relative bg-gray-800 rounded-xl overflow-hidden">
                <img
                  src={movie.poster?.url || "https://picsum.photos/700/300"}
                  className="w-full h-full object-cover opacity-70"
                  alt={movie.name || "Movie"}
                />
                <div className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full">
                  <i className="fa-regular fa-bookmark text-white"></i>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">{movie.year} • Movie • PG</p>
                  <h3 className="text-lg font-bold">{movie.name || 'No Title Available'}</h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Hero;
