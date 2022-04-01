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

export const fetchCommentSuccess = (comments, currentPage) => {
    return {
        type : FETCH_COMMENT_SUCCESS,
        payload : {comments, currentPage}

    }

}

export const fetchCommentFailure = (error) => {
    return {
        type : FETCH_COMMENT_FAILURE,
        payload : error
    }
}

export const fetchComments = (currentPage, postPerPage) => {
    const url = `https://jsonplaceholder.typicode.com/comments?_start=${currentPage * postPerPage}&_limit=${postPerPage}`;
    return (dispatch) => {
        dispatch(fetchCommentRequest());
        axios.get(url) 
        .then(response => {
            const comments = response.data;
            dispatch(fetchCommentSuccess(comments, currentPage));
        })
        .catch(error => dispatch(fetchCommentFailure(error.message)))
    }
}