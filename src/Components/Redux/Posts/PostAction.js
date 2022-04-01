import {
    FETCH_POST_FAILURE,
FETCH_POST_REQUEST,
FETCH_POST_SUCCESS
} from './PostActionType';
import axios from 'axios';


export const fetchPostRequest = () => {
    return {
        type : FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (users) => {
    return {
        type : FETCH_POST_SUCCESS,
        payload : users
    }
}

export const fetchPostFailure = (error) => {
    return {
        type : FETCH_POST_FAILURE,
        payload : error
    }
}

export const fetchPostData = (indexOfFirstPost, postPerPage) => {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${indexOfFirstPost}&_limit=${postPerPage}`;
    return (dispatch) => {
        dispatch(fetchPostRequest());
        axios.get(url)
        .then(response => {
            const users = response.data;
            dispatch(fetchPostSuccess(users))
        })
        .catch(error => dispatch(fetchPostFailure(error.message)))
    }
}

