import React from "react";

const Card = ({ movie }) => {
  const transformDate = () => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    let newDate = new Date(movie.release_date);
    return newDate.toLocaleDateString("fr-FR", options).toString();
  };
  transformDate();
  const getGenres = () => {
    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ];
    let genresArray = [];
    movie.genre_ids.map((id) =>
      genres.map((genre) => {
        if (genre.id === id) {
          genresArray.push(genre.name);
        }
      })
    );
    return genresArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };
  const deleteStorage = () => {
    let storedDate = window.localStorage.movies.split(",");
    let newData = storedDate.filter((id) => id != movie.id);
    window.localStorage.movies = newData;
  };
  return (
    <div className="movie-content">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : "./img/poster.png"
        }
        alt={"poster of " + movie.title}
      />
      <h3>{movie.title}</h3>
      <h5>{transformDate()}</h5>
      <h4>
        {movie.vote_count !== 0
          ? `⭐${Math.floor(movie.vote_average)}/10`
          : null}
      </h4>
      <ul className="genres">
        {movie.genre_ids
          ? getGenres()
          : movie.genres.map((genre) => <li key={movie.id}>{genre.name}</li>)}
      </ul>
      <h3>Synopsis</h3>
      <p>
        {movie.overview
          ? movie.overview
          : "No synopsis to display for this movie."}
      </p>
      {movie.genre_ids ? (
        <button
          onClick={() => {
            addStorage();
          }}
        >
          Add to favorites
        </button>
      ) : (
        <button
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Remove from favorites
        </button>
      )}
    </div>
  );
};

export default Card;
