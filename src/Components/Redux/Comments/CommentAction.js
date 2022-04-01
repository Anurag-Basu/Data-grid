import axios from 'axios';
import {
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAILURE
} from './CommentActionType';

export const fetchCommentRequest = () => {
    return {
        type : FETCH_COMMENT_REQUEST
    }
}

export const fetchCommentSuccess = (comment) => {
    return {
        type : FETCH_COMMENT_SUCCESS,
        payload : comment

    }

}

export const fetchCommentFailure = (error) => {
    return {
        type : FETCH_COMMENT_FAILURE,
        payload : error
    }
}

export const fetchComments = (indexOfFirstPost, postPerPage) => {
    const url = `https://jsonplaceholder.typicode.com/comments?_start=${indexOfFirstPost}&_limit=${postPerPage}`;
    return (dispatch) => {
        dispatch(fetchCommentRequest());
        axios.get(url) 
        .then(response => dispatch(fetchCommentSuccess(response.data)))
        .catch(error => dispatch(fetchCommentFailure(error.message)))
    }
}