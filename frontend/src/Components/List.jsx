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
    
    // for( let data of questions ) {
    //      console.log( data._id )
    // }

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
           
           <section className = 'questionContainer' >
                <div className = 'question1'>
                    <div className = 'question11'>
                        Question no 
                    </div>
                    <div className = 'question12'>
                        Timer : 01:29
                    </div>
                </div>

                <div className = 'question2'>
                        A train passes a station platform in 36 seconds and a man standing on 
                    the platform in 20 seconds. If the speed of the train is 54 km/hr, 
                    what is the length of the platform?
                </div>

                <div className = 'question3'>
                    <span  className = 'options'  > </span> 
                 </div>

            </section>

           <Question/>
        </div>
    )
}