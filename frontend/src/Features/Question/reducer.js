import { 
    ALL_QUESTION_LOADING,
    ALL_QUESTION_SUCCESS,
    ALL_QUESTION_FAIL,
    CLEAR_ERROR
} 
from "./actionType";

const initialState = { 
    questions: [], 
    loading: true,
};

export const questionReducer = ( state = initialState, action) =>{
     
    switch(action.type){
        case ALL_QUESTION_LOADING:
        return{
                loading : true,
                questions : [],
        }
        case ALL_QUESTION_SUCCESS : 
        return{  
              loading : false,
              questions : action.payload.questions,
            //   questionsCount: action.payload.questionsCount,
            //   resultPerPage:action.payload.resultPerPage,
        }
        case ALL_QUESTION_FAIL : 
        return{
             loading : false,
             error : action.payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
};
