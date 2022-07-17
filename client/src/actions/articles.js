import { GET_ARTICLES } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getArticles = () => async(dispatch) => {
    try{
        const { data } = await api.getArticles();
        console.log(data);
        dispatch({type: GET_ARTICLES, payload: data});
    }catch(error){
        console.log(error);
    }
}