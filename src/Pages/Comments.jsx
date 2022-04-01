import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../Components";
import { fetchComments } from "../Components/Redux/Comments/CommentAction";

const columns = ["id", "postId", "name", "email", "body"];
const Comments = () => {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [postPerPage] = useState(10);
  const totalPost = postPerPage * 10;

  const paginate = (num) => {
    setIndexOfFirstPost(num * 10)
  }

  useEffect(() => {
    dispatch(fetchComments(indexOfFirstPost, postPerPage));
  }, [indexOfFirstPost, postPerPage]);
  return (
    <>
      {comments.comments && (
        <Table data={comments.comments} columns={columns} 
          postPerPage={postPerPage}
          totalPost={totalPost}
          paginate ={paginate}
        />
      )}
    </>
  );
};

export default Comments;
