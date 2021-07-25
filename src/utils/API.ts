import axios from "axios";

type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}


export type QuestionState = Question & { answers: string[] }

enum E_DIFFICULTY {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export type UserAnswer = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }

const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.756)
}

const fetchQuestions = async (amount: number, difficulty: E_DIFFICULTY) => {
    const endPoint = `https://opentdb.com/api.php?amount=${10}&difficulty=${difficulty}`;
    const { data } = await axios.get(endPoint);
    return data.results.map((question: Question) => {
        return { ...question, answers: shuffleArray([...question.incorrect_answers, question.correct_answer]) }
    })
}


export { fetchQuestions, E_DIFFICULTY }