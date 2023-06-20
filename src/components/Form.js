import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [data, setData] = useState([]);
  const [inputContent, setInputContent] = useState("war");
  const [moviesSort, setmoviesSort] = useState(null);

  useEffect(() => {
    axios
      .get(
        inputContent != ""
          ? "https://api.themoviedb.org/3/search/movie?query=" +
              inputContent +
              "&api_key=3e809ac014c56a044dfeb052290f9275"
          : "https://api.themoviedb.org/3/search/movie?query=war&api_key=3e809ac014c56a044dfeb052290f9275"
      )
      .then((res) => setData(res.data.results));
  }, [inputContent]);

  return (
    <div>
      <div className="search">
        <i class="fa-sharp fa-solid fa-magnifying-glass-arrow-right"></i>
        <input
          spellcheck="false"
          type="text"
          placeholder="ex: Matrix"
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
        ></input>
        <label htmlFor="sort">sort:</label>
        <button
          name="sort"
          id="sortReview"
          onClick={() => setmoviesSort("sortReview")}
        >
          best review
        </button>
        <button
          name="sort"
          id="sortDate"
          onClick={() => setmoviesSort("sortDate")}
        >
          date
        </button>
        <button className="reset" onClick={() => setmoviesSort(null)}>
          <i class="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
      <div className="form">
        {data
          .slice(0, 24)
          .sort((a, b) => {
            if (moviesSort === "sortReview") {
              return b.vote_average - a.vote_average;
            } else if (moviesSort === "sortDate") {
              return new Date(b.release_date) - new Date(a.release_date);
            } else {
              return b.popularity - a.popularity;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
