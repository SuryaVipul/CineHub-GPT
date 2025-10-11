import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return <p>Loading movies...</p>;
  }
  return (
    <div className="px-3">
      <h1 className="text-3xl pt-2 pb-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll whitespace-nowrap cursor-pointer">
        <div className="flex space-x-4">
          {movies.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
