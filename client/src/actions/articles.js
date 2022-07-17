import { GET_ARTICLES } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getArticles = () => {
    try{
        const { data } = await api.getArticles();
        dispatch({type: GET_ARTICLES, payload: data});
    }catch(error){
        console.log(error);
    }
}