import { 
    ALL_QUESTION_LOADING,
    ALL_QUESTION_SUCCESS,
    ALL_QUESTION_FAIL,
} 
from "./actionType";


export const  getQuestionLoading = () => {
    return {
        type: ALL_QUESTION_LOADING,
    }
}


export const  getQuestionSuccess = (payload) => {
    return {
        type: ALL_QUESTION_SUCCESS,
        payload: payload,
    }
}

export const  getQuestionFail = (payload) => {
    return {
        type: ALL_QUESTION_FAIL,
        payload: payload,
    }
}