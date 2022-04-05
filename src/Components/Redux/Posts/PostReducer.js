import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./PostActionType";

let initialState = {
  loading: true,
  posts: {},
  error: "",
};


const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      const posts = { ...state.posts };
      posts[payload.currentPage] = payload.posts;
      return {
        loading: false,
        posts,
        error: "",
      };

    case FETCH_POST_FAILURE:
      return {
        loading: false,
        posts: {},
        error: payload,
      };
    default:
      return state;
  }
};

export default postReducer;
