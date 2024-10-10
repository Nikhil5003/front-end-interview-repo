import { Button } from "@mui/material";
import React, { useState } from "react";

function CommentItem({
  comment,
  subComments,
  commentId,
  addComment,
  deleteComment,
  parentId,
}) {
  const [inputOpen, setInputOpen] = useState(false);
  const [value, onInputChange] = useState("");
  const [viewReplyClicked, setViewReplyClicked] = useState(true);
  const onChange = (e) => {
    onInputChange(e.target.value);
  };
  const onAddComment = () => {
    setInputOpen(true);
  };
  const onToggle = () => {
    setViewReplyClicked((prev) => !prev);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "yellow",
        }}
      >
        <div>{comment}</div>
        <Button variant="contained" color="primary" onClick={onAddComment}>
          Add Comment
        </Button>
        <Button
          variant="text"
          color="error"
          onClick={() => {
            deleteComment(parentId, commentId);
          }}
        >
          Delete Comment
        </Button>
        {subComments.length > 0 && (
          <Button onClick={onToggle} variant="text" color="secondary">
            {!viewReplyClicked ? "View Replies" : "Hide Replies"}
          </Button>
        )}
      </div>
      {inputOpen && (
        <>
          <input value={value} onChange={onChange} />
          <Button
            onClick={() => {
              addComment(value, commentId);
              setInputOpen(false);
            }}
            variant="text"
            color="success"
          >
            Enter
          </Button>
        </>
      )}
      <div
        style={{
          paddingLeft: "20px",
          margin: "10px",
        }}
      >
        {viewReplyClicked &&
          (subComments.length
            ? subComments.map(({ comment, subComments, id }) => (
                <CommentItem
                  deleteComment={deleteComment}
                  parentId={commentId}
                  addComment={addComment}
                  comment={comment}
                  subComments={subComments}
                  commentId={id}
                />
              ))
            : null)}
      </div>
    </>
  );
}

export default CommentItem;
