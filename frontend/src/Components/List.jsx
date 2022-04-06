import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from './Loader/Loader'
import { Question} from './Question/Question'
import {
    getQuestionLoading,
    getQuestionSuccess,
    getQuestionFail,
} from '../Features/Question/action'

export const List = () => {
    const dispatch = useDispatch()

    const {
        loading,
        questions,
    } = useSelector((state) => state.questionsState)

    // console.log( questions , loading );

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
            })
            .catch((err) => {
                dispatch( getQuestionFail(err))
            })
    }

    return (

        <div> ListCard 
          { loading ? ( <Loader/> ) :
            (  
             questions && questions.map((que) =>    <div key={que._id} > <Question  {...que} /> </div>    ) 
            ) 
           }
           
           <Question/>
        </div>
    )
}