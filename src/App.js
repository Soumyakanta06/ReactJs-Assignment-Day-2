import React,{useState} from 'react'
import './style.css'
const Apple = () => {
    let [score,setScore] = useState(0)
    return(
        <div>
            <h1>Hey This is my Counter apllication</h1>
            <h3>The value of score is {score}  </h3>   
            <button onClick={()=>{score < 25? setScore(score+1): setScore(score=25)}}>Increment</button>
            <button onClick={()=>{score > 0? setScore(score-1): setScore(score=0)}}>Decrement</button>
            <button onClick={()=>{setScore(score=0)}}>Reset</button>

        </div>
    )
}
export default Apple
// function ab(){
//     score = score + 1;
// }
 
 
