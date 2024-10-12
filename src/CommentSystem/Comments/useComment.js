import { useState } from "react";
import { initialCommentsData } from "../../constants";

function useComment() {
  const [commentsData, setCommentsData] = useState(initialCommentsData);
  const addComment = (newComment, targetId) => {
    const comments = [...commentsData];

    // Function to traverse the comments and find the correct comment by id
    const findAndAddComment = (comments) => {
      for (let comment of comments) {
        if (comment.id === targetId) {
          // Add the new sub-comment to the subComments array
          comment.subComments.push({
            id: Math.ceil(Math.random() * 10000 + 1), // For simplicity, increase the ID (you could make it more unique)
            comment: newComment,
            subComments: [],
          });
          return; // Exit once the comment is added
        }

        // If the current comment has sub-comments, traverse them recursively
        if (comment.subComments.length > 0) {
          findAndAddComment(comment.subComments);
        }
      }
    };

    // Call the helper function to add the comment
    findAndAddComment(comments);

    // Update the state with the modified comments
    setCommentsData(comments);
  };
  const deleteComment = (parentId, targetId) => {
    // Make a copy of the current comments data
    const comments = [...commentsData];

    // Function to find and delete the comment by targetId
    const findAndDeleteComment = (comments) => {
      if (parentId === null) {
        // If no parentId is provided, delete from top-level comments
        for (let i = 0; i < comments.length; i++) {
          if (comments[i].id === targetId) {
            comments.splice(i, 1); // Remove the comment from the array
            return;
          }
        }
      } else {
        // Traverse through comments to find the parent comment
        for (let comment of comments) {
          if (comment.id === parentId) {
            // If the parent is found, search in its subComments
            for (let i = 0; i < comment.subComments.length; i++) {
              if (comment.subComments[i].id === targetId) {
                comment.subComments.splice(i, 1); // Remove the target comment
                return;
              }
            }
          }
          // If there are nested sub-comments, continue searching recursively
          if (comment.subComments.length > 0) {
            findAndDeleteComment(comment.subComments);
          }
        }
      }
    };

    // Call the function to delete the comment
    findAndDeleteComment(comments);

    // Update the state with the modified comments
    setCommentsData(comments);
  };
  const addCommentToList = () => {
    setCommentsData((prev) => [
      ...prev,
      {
        comment: "hi nikhil and sonika",
        subComments: [],
        id: Math.ceil(Math.random() * 10000),
      },
    ]);
  };
  const deleteAllComments = () => {
    setCommentsData([]);
  };
  return {
    commentsData,
    addComment,
    deleteComment,
    addCommentToList,
    deleteAllComments,
  };
}

export default useComment;
