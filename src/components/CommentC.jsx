import css from "./css/comment.module.css"

function CommentC(props) {
    return (
        <div className={` ${css.singleComment} d-flex justify-content-between align-items-center`}>
            <div>{props.text}</div>
            <div className={css.ratingBox}>{props.rating}</div>
        </div>
    )
}

export default CommentC