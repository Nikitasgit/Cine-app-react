import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";

const Favorites = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            moviesId[i] +
            "?api_key=3e809ac014c56a044dfeb052290f9275"
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="mylist">
      <Navigation />
      <h2>
        <span>Favorites</span>
      </h2>

      <div className="form">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>No movies added to your list yet...</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
