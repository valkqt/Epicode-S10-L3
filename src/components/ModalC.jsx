import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CommentC from "./CommentC.jsx";
import css from "./css/modal.module.css";


function ModalC({ commentData, show, onHide, movie }) {
  const [formState, setFormState] = React.useState({
    text: "",
    rating: "",
  });

  function addComment(e) {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDQ5MDEwNDQsImV4cCI6MTcwNjExMDY0NH0.NRQXoAobIqcqvnJmy4yD_p2gAPuAbPI8iQt-37_Ummc ",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comment: formState.text,
        rate: formState.rating,
        elementId: movie,
      }),
    }).catch(console.log);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {commentData.map((elem) => (
          <CommentC text={elem.comment} rating={elem.rate} key={elem._id} />
        ))}
      </Modal.Body>
      <hr />
      <Modal.Body>
        <Form onSubmit={(e) => addComment(e)}>
          <Form.Group>
            <Form.Label>Add Your Comment:</Form.Label>
            <Form.Control
            className={css.inputField}
              type="text"
              placeholder="write your comment"
              onChange={(event) =>
                setFormState({ ...formState, text: event.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating:</Form.Label>
            <div className="d-flex justify-content-around">
              <Form.Check
                type="radio"
                value="1"
                label="1"
                name="rate"
                onClick={(event) =>
                  setFormState({ ...formState, rating: event.target.value })
                }
              />
              <Form.Check
                type="radio"
                value="2"
                label="2"
                name="rate"
                onClick={(event) =>
                  setFormState({ ...formState, rating: event.target.value })
                }
              />
              <Form.Check
                type="radio"
                value="3"
                label="3"
                name="rate"
                onClick={(event) =>
                  setFormState({ ...formState, rating: event.target.value })
                }
              />
              <Form.Check
                type="radio"
                value="4"
                label="4"
                name="rate"
                onClick={(event) =>
                  setFormState({ ...formState, rating: event.target.value })
                }
              />
              <Form.Check
                type="radio"
                value="5"
                label="5"
                name="rate"
                onClick={(event) =>
                  setFormState({ ...formState, rating: event.target.value })
                }
              />
            </div>
            <Button type="submit" onClick={() => onHide()} className={css.formButton} >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalC;
