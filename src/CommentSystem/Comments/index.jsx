import React from "react";
import useComment from "./useComment";
import CommentItem from "./CommentItem";

function Comments() {
  const {
    commentsData,
    addComment,
    deleteComment,
    addCommentToList,
    deleteAllComments,
  } = useComment();

  return (
    <div>
      <button
        style={{
          marginBottom: "20px",
          backgroundColor: "green",
          width: "100%",
          borderRadius: "200px",
          border: "none",
          padding: "20px",
        }}
        onClick={addCommentToList}
      >
        add comment to this post{" "}
      </button>

      <button
        style={{
          marginBottom: "20px",
          backgroundColor: "red",
          width: "100%",
          borderRadius: "200px",
          border: "none",
          padding: "30px",
        }}
        onClick={deleteAllComments}
      >
        Delete All Comments
      </button>
      {commentsData.map((comment) => (
        <CommentItem
          deleteComment={deleteComment}
          parentId={null}
          addComment={addComment}
          comment={comment.comment}
          commentId={comment.id}
          subComments={comment.subComments}
        />
      ))}
    </div>
  );
}

export default Comments;
