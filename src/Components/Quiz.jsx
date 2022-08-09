import { useState, useContext } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from "../Helpers/Contexts"
import '../App.css'


export default function Quiz() {

  const { score, setScore, setGameState } = useContext(QuizContext)    

  const [currQuestion, setCurrQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState('')
  const [clickedA, setClickedA] = useState(false)
  const [clickedB, setClickedB] = useState(false)
  const [clickedC, setClickedC] = useState(false)
  const [clickedD, setClickedD] = useState(false)
  
  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen){
      setScore(score+1)
    }
    setClickedA(false)
    setClickedB(false)
    setClickedC(false)
    setClickedD(false)
    setCurrQuestion(currQuestion+1)
  }

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen){
      setScore(score+1)
    }
    setGameState('end')
  }

  const optionClick = (option) => {
    setOptionChosen(option)
    switch (option){
      case 'A':
        setClickedA(!clickedA)
        setClickedB(false)
        setClickedC(false)
        setClickedD(false)
        break;
      case 'B':
        setClickedB(!clickedB)
        setClickedA(false)
        setClickedC(false)
        setClickedD(false)
        break;
      case 'C':
        setClickedC(!clickedC)
        setClickedB(false)
        setClickedA(false)
        setClickedD(false)
        break;
      case 'D':
        setClickedD(!clickedD)
        setClickedB(false)
        setClickedC(false)
        setClickedA(false)
        break;
      default:
        break;
    }
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button style={{backgroundColor: clickedA ? 'greenyellow' : 'aliceblue'}} onClick={() => optionClick('A')}>
          {Questions[currQuestion].optionA}
        </button>
        <button style={{backgroundColor: clickedB ? 'greenyellow' : 'aliceblue'}} onClick={() => optionClick('B')}>
          {Questions[currQuestion].optionB}
        </button>
        <button style={{backgroundColor: clickedC ? 'greenyellow' : 'aliceblue'}} onClick={() => optionClick('C')}>
          {Questions[currQuestion].optionC}
        </button>
        <button style={{backgroundColor: clickedD ? 'greenyellow' : 'aliceblue'}} onClick={() => optionClick('D')}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === (Questions.length - 1) ? 
      (<button onClick={finishQuiz}>Finish Quiz</button>)  
      : 
      (<button onClick={nextQuestion}>Next Question</button>)
    }
    </div>
  )
}