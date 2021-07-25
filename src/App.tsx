import React, { useEffect, useState } from 'react';
import { GlobalStyle, Wrapper } from './app.styles';
import { QuestionCard } from './components/Questioncard';
import { E_DIFFICULTY, fetchQuestions, QuestionState, UserAnswer } from './utils/API';

const TOTAL_QUESTIONS = 10;


function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswer[]>([]);
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
      const ans = e.currentTarget.value;
      const correct = questions[number].correct_answer === ans;
      if (correct) setScore(score => score + 1);
      const userAnswers = [...userAnswer, { question: questions[number].question, answer: ans, correct, correctAnswer: questions[number].correct_answer }];
      setUserAnswer(userAnswers);
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
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <h2>Quiz</h2>
        {gameOver || userAnswer.length === TOTAL_QUESTIONS ? <button className="start" onClick={startQuiz}>Start</button> : null}
        {!gameOver ? <p className="score">Score:{score}</p> : null}
        {loading ? <p>Loading questions...</p> : null}
        {!loading && !gameOver && <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer[number] ? userAnswer[number] : undefined}
          checkAnswer={checkUserAnswer}
        />}
        {!gameOver && !loading && number !== 0 && <button onClick={prevQuestion} className="prev">Previous Question</button>}
        {!gameOver && !loading && number !== TOTAL_QUESTIONS - 1 && <button onClick={nextQuestion} className="next">Next Question</button>}
        {number===TOTAL_QUESTIONS && <button className="restart">Restart</button>}
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
