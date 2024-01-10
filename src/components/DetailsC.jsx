import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import ModalC from "./ModalC.jsx";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner"

function DetailsC() {
  const [movie, setMovie] = React.useState({});
  const [commentData, setCommentData] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const params = useParams();

  useEffect(getDetails, []);

  function getDetails() {
    setLoading(true)
    fetch(`http://www.omdbapi.com/?apikey=1413de3e&i=${params.movieId}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data)
        setLoading(false);
      });
  }

  function getComments(movieID) {
    const endpoint = `https://striveschool-api.herokuapp.com/api/books/${movieID}/comments`;

    return fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
  }
  if (!loading) {
    return (
      <Container>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster}></img>
        <ListGroup>
          {Object.entries(movie).map((array) => {
            const [key, value] = array;
            if (!["Ratings", "Poster"].includes(key)) {
              return (
                <ListGroupItem className="bg-dark text-white" key={key}>
                  {key}: {value}
                </ListGroupItem>
              );
            }
            // equivalente a
            // {Object.entries(movie).map(([key, value]) => {
            //     return (
            //         <ListGroupItem key={key}>{key}: {JSON.stringify(value)}</ListGroupItem>
            //     )
          })}
        </ListGroup>
        <ModalC
          show={modalShow}
          onHide={() => setModalShow(false)}
          movie={params.movieId}
          commentData={commentData}
        />
        <Button
          onClick={async () => {
            setModalShow(true);
            setCommentData(await getComments(params.movieId));
          }}
        >
          Show Comments
        </Button>
      </Container>
    );
  } else {
    return <Spinner variant="danger"/>
  }
}

export default DetailsC;
