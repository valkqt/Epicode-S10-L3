import ModalC from "./ModalC.jsx";
import React from "react";
import css from "./css/card.module.css";
import { Link } from "react-router-dom";

function CardC({ poster, identifier }) {
  const [commentShow, setCommentShow] = React.useState(false);
  const [commentData, setCommentData] = React.useState([]);

  return (
    <Link to={`/details/${identifier}`}>
      <div className={css.cardBox} onMouseLeave={() => setCommentShow(false)}>
        <img
          src={poster}
          alt=""
          // onMouseOver={() => setCommentShow(true)}
        />

        {/* <ModalC show={modalShow} onHide={() => setModalShow(false)} movie={identifier} commentData={commentData}/>
        {commentShow && (
          <div className={css.commentButton} onClick={async () => {setModalShow(true); setCommentData(await getComments(identifier))}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              className="bi bi-chat-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
          </div>
        )} */}
      </div>
    </Link>
  );
}

  // .then((data) => {
  //   console.log(data)
  //   // data.map(
  //   //   (elem) => {
  //   //   return <CommentC text={elem.text} rating={elem.rate} />;
  //   // });
  // });


export default CardC;
