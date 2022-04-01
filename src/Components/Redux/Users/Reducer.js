import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
} from './ActionType';

let initialState = {
    loading : true,
    users : null,
    error : ''
}

const userReducer = (state = initialState, {type, payload}) =>  {
    switch(type){
        case FETCH_USER_REQUEST: 
            return {
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESS :
            return {
                loading: false,
                users : payload,
                error : ''
            }

        case FETCH_USER_FAILURE :
            return {
                loading : false,
                users : null,
                eroor : payload
            }
        default : 
            return state;
    }
}

export default userReducer;