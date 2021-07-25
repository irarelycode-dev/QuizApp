import React, { useEffect, useState } from 'react';
import { QuestionCard } from './components/Questioncard';
import { E_DIFFICULTY, fetchQuestions, QuestionState } from './utils/API';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, E_DIFFICULTY.MEDIUM);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  const checkUserAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const userAnswer = e.currentTarget.value;
      const correct = questions[number].correct_answer === userAnswer;
      if (correct) setScore(score => score + 1);
    }
  }

  const nextQuestion = () => {
    setLoading(true);
    setNumber(number => number + 1);
    setLoading(false);
  }
  const prevQuestion = () => {
    setLoading(true);
    setNumber(number => number - 1);
    setLoading(false);
  }

  return (
    <div className="App">
      <h2>Quiz</h2>
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? <button className="start" onClick={startQuiz}>Start</button> : null}
      {!gameOver ? <p className="score">Score:{score}</p> : null}
      {loading ? <p>Loading questions...</p> : null}
      {!loading && !gameOver && <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer : undefined}
        checkAnswer={checkUserAnswer}
      />}
      {!gameOver && !loading && number !== 0 && <button onClick={prevQuestion}>Previous Question</button>}
      {!gameOver && !loading && number !== TOTAL_QUESTIONS - 1 && <button onClick={nextQuestion}>Next Question</button>}
    </div>
  );
}

export default App;
