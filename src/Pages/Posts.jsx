import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../Components";
import { fetchPostData } from "../Components/Redux/Posts/PostAction";

const columns = ["id", "userId", "body", "title"];
function Posts() {
  const [indexOfFirstPost, SetIndexOfFirstPost] = useState(0);
  const [postPerPage, setPostPerPage] = useState(10);
  const totalPost = postPerPage * 10;;
  // const [indexOfLastPage, setIndexOfLastPage] = useState(10);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const paginate = (num) => {
    SetIndexOfFirstPost(num * 10);
  };

  useEffect(() => {
    dispatch(fetchPostData(indexOfFirstPost, postPerPage));
  }, [indexOfFirstPost, postPerPage]);

  return (
    <>
      {posts.posts && (
        <Table
          data={posts.posts}
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
