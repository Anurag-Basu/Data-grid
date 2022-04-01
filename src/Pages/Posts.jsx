import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../Components";
import { fetchPostData } from "../Components/Redux/Posts/PostAction";

const columns = ["id", "userId", "body", "title"];
function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [postPerPage] = useState(20);
  const totalPost = postPerPage * 5;
  const dispatch = useDispatch();

  const paginate = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    if (posts[currentPage]) {
      setTableData(posts[currentPage]);
      return;
    }
    dispatch(fetchPostData(currentPage, postPerPage));
  }, [currentPage, postPerPage, dispatch, posts]);

  useEffect(() => {
    setTableData(posts[currentPage])
  }, [currentPage, postPerPage, dispatch,posts]);


  return (
    <>
      {posts && (
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
}

export default Posts;
