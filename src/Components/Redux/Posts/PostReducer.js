import {
    FETCH_POST_FAILURE,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS
} from './PostActionType';


let initialState = {
    loading : true,
    posts : null,
    error : ''
}

const postReducer = (state = initialState, {type, payload}) =>  {
    switch(type){
        case FETCH_POST_REQUEST: 
            return {
                ...state,
                loading : true
            }
        case FETCH_POST_SUCCESS :
            return {
                loading: false,
                posts : payload,
                error : ''
            }

        case FETCH_POST_FAILURE :
            return {
                loading : false,
                posts : null,
                eroor : payload
            }
        default : 
            return state;
    }
}

export default postReducer;