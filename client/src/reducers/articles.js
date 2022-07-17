import * as actionType from '../constants/actionTypes';

const articlesReducer = (state = {articlesData : [
    {
        id: '',
        title: '',
        desc: '',
        image: '',
        date: '',
        time: ''   
    },
]}, action) => {
    switch(action.type){
        case actionType.GET_ARTICLES:
            return {
                ...state,
                articlesData: (action.payload).data
            }
        default:
            return state;
    }
}

export default articlesReducer;