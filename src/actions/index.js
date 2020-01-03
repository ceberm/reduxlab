import {MOVIES_LIST} from "../types";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

export function moviesList(){

    const request = axios.get(url).then(res => res.data)
    return({
        type: MOVIES_LIST,
        payload: request
    });
}