import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./PostActionType";
import axios from "axios";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (posts, currentPage) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: { posts, currentPage },
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPostData = (currentPage, postPerPage) => {
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${
    currentPage * postPerPage
  }&_limit=${postPerPage}`;
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get(url)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts, currentPage));
      })
      .catch((error) => dispatch(fetchPostFailure(error.message)));
  };
};
