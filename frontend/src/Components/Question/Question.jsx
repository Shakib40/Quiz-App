import {useState} from 'react'
import './Question.css'
export const Question = ( {_id ,  question , options , explanation , answer  } ) => {
    
    const [mystyle , setStyle] = useState({})
    
    // const mystyle1  = {
    //     border : "1px solid #50c594",
    // }

    // const mystyle2  = {
    //     border : "1px solid #ff4363",
    // }

    const [ correct , setCorrect ] = useState({})
    const [ wrong , setWrong ] = useState({})

    const clickOptions = (x , y) => {
        if( x == y ) {
            // setStyle({
            //     border : "1px solid #50c594",
            // }) 
        }else{
            // setStyle({
            //     border : "1px solid #ff4363",
            // }) 
        }
    }

    return (
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
             	{ question } A train passes a station platform in 36 seconds and a man standing on 
                the platform in 20 seconds. If the speed of the train is 54 km/hr, 
                what is the length of the platform?
        </div>

        <div className = 'question3'>

            { options && options.map( (op) => 

                <span style = {mystyle} className = 'options' key = {op._id} onClick = { () => clickOptions(op.option , answer ) } >
                    { op.option }   
                </span>              
           )}
          

        </div>

    </section>
  )
}
