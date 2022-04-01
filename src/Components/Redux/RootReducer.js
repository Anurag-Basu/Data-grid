import { combineReducers } from "redux";
import Reducer from "./Users/Reducer";
import postReducer from './Posts/PostReducer'
import commentReducer from "./Comments/CommentReducer";


const rootReducer = combineReducers({
    users : Reducer,
    posts : postReducer,
    comments : commentReducer
})

export default rootReducer;