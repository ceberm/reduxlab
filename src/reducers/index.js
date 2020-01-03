import {combineReducers} from "redux"
//Importe cada uno de los reducers que vamos a hacer
import movies from "./movies_reducer"
//import users from "./movies_reducer"

const rootReducer = combineReducers({
    movies
});

export default rootReducer;
