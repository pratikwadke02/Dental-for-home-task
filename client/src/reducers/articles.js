import * as actionType from '../constants/actionTypes';

const articlesReducer = (state = {articlesData : []}, action) => {
    switch(action.type){
        case actionType.GET_ARTICLES:
            return {
                ...state,
                articlesData: (action.payload).articles
            }
        default:
            return state;
    }
}

export default articlesReducer;