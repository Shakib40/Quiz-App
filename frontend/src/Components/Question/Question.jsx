import {useState} from 'react'
import './Question.css'
export const Question = ( {_id ,  question , options , explanation  } ) => {
    
    console.log(explanation , options);
    const [counter , setCounter] = useState(0);

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

            { options && options.map( ( op, i ) =>
            
                <div className = 'options' key = {op._id} > { op.option } </div>
            )}

        </div>

    </section>
  )
}
