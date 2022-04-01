import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../Components";
import { fetchComments } from "../Components/Redux/Comments/CommentAction";

const columns = ["id", "postId", "name", "email", "body"];
const Comments = () => {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage] = useState(20);
  const [tableData, setTableData] = useState([]);
  const totalPost = postPerPage * 10;
  console.log(currentPage, postPerPage, comments )

  const paginate = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    if (comments[currentPage]) {
      return setTableData(comments[currentPage]);
    }
    dispatch(fetchComments(currentPage, postPerPage));
  }, [currentPage, postPerPage, dispatch]);

  useEffect(() => {
    setTableData(comments[currentPage]);
  }, [comments]);

  return (
    <>
      {comments && (
        <Table
          data={tableData}
          columns={columns}
          postPerPage={postPerPage}
          totalPost={totalPost}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default Comments;
