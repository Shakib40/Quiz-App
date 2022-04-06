import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    getQuestionLoading,
    getQuestionSuccess,
    getQuestionFail,
} from '../Features/Question/action'

export const List = () => {
    const dispatch = useDispatch()
    const [ questions, setQuestions] = useState([])

    // const {
    //     loading,
    //     question,
    // } = useSelector((state) => state.questionsState)

    useEffect(() => {
        getData()
    }, [dispatch])


    const getData = () => {
        dispatch( getQuestionLoading() )

        let link = 'http://localhost:4500/questions'

        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                dispatch( getQuestionSuccess(data) )
                setQuestions(data.questions)     
            })
            .catch((err) => {
                dispatch( getQuestionFail(err))
            })
    }

    return (

        <div> ListCard 
          { questions.map((que) =>

              <div key={que._id} > { que.question } </div> 
          
          )}
        </div>
    )
}