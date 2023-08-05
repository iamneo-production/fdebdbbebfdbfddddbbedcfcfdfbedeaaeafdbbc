import React, { useState } from 'react';
import {Banner} from './components/UI/Banner/Banner';

import './App.css'
export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  
  const [showButton, setShowButton]=useState(false);
  const [showQuiz, setShowQuiz]=useState(false);
 
  const[, setQuestionsCorrect]=useState(0);



  const handleQuizButton =() => {
    setShowQuiz(true);
  }

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
      setQuestionsCorrect(score+1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
      
		} else {
			setShowButton(true);
		}
    
	};
  const handleScore =() =>{
    setShowScore(true);
  }
  const text =()=>{
    const nextQuestion=currentQuestion+1;
    if(nextQuestion === questions.length){
      return "Show Results"
    }
    
  }
  const Button = ({ onClick, children }) => {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowScore(false);
  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
          
              {Banner}
            
					You scored {score} out of {questions.length}
          <div><button type="submit" onClick={resetQuiz} text="Start Quiz">Start Quiz</button></div>
				</div>
			) : (
				<>
        <div><h1>Quizz App</h1></div><br />
        <div>
        {!showQuiz && <button className='rr' onClick ={()=> handleQuizButton()}  >Start Quiz</button>}</div>
        {showQuiz && (<div>
          
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div> 
            
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
            <div>
            {showButton && <Button id="qq" onClick={() => handleScore()} text="Show Results">{text()}</Button>}</div>
            </div>
            
            
					
          </div>)}
				</>
			)}
		</div>
	);
}