import {
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAILURE
} from './CommentActionType';

const initialState = {
    loading : true,
    comments : null,
    error : ''
}

const commentReducer = (state = initialState, {type, payload}) =>  {
    switch(type){
        case FETCH_COMMENT_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_COMMENT_SUCCESS: 
            return {
                loading : false,
                comments : payload,
                error : ''
            }
        case FETCH_COMMENT_FAILURE : 
            return {
                loading : false,
                comments : null,
                error : payload
            }
        default : 
            return state;
    }
}

export default commentReducer;