import React, { useEffect } from "react";
import CardC from "./CardC.jsx";
import css from "./css/slider.module.css";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert"

function SliderC(props) {
  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  useEffect(() => {
    const endpoint = `http://www.omdbapi.com/?apikey=1413de3e&s=${encodeURIComponent(
      props.searchText
    )}`;

    setLoading(true)

    fetch(endpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.Search) {
          setLoading(false)
          setError(true)
          window.setTimeout(() => window.location.reload(), 750)
          return
        }
        setMovies(data.Search)
        setLoading(false)
      })

  }, [])
  return (
    <section className={css.slider}>
      {loading === true && (
        <>
          <Spinner />
          <Spinner />
          <Spinner />
          <Spinner />
          <Spinner />
        </>
      )}
      {error && (
        <Alert className={css.alert}>
          Nothing was found
        </Alert>
      )}
      {movies.slice(0, 5).map((movie) => {
        return (
          <CardC
            key={movie.imdbID}
            poster={movie.Poster}
            identifier={movie.imdbID}
          />
        );
      })}
    </section>
  );


}

export default SliderC