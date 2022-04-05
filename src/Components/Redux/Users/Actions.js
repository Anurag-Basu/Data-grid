import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./ActionType";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUserData = () => {
  const usersUrl = `https://jsonplaceholder.typicode.com/users`;


  return async (dispatch) => {
    try{
    const response = await axios.get(usersUrl);
    dispatch(fetchUserSuccess(response.data));
   }
  catch(error){
    dispatch(fetchUserFailure(error.message))
  }
  }

  // return (dispatch) => {
  //   dispatch(fetchUserRequest());
  //   axios
  //     .get(usersUrl)
  //     .then((response) => {
  //       const users = response.data;
  //       dispatch(fetchUserSuccess(users));
  //     })
  //     .catch((error) => dispatch(fetchUserFailure(error.message)));
  // };
};
