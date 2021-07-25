import React from 'react';
import { UserAnswer } from '../utils/API';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

interface Props {
    question: string;
    answers: string[];
    checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: UserAnswer | undefined;
    questionNr: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <Wrapper>
            <p className="number">Question:{props.questionNr}/{props.totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: props.question }} />
            <div>{props.answers.map((answer, index) => {
                return (
                    <ButtonWrapper key={index} correct={props.userAnswer?.correctAnswer === answer} userClicked={props.userAnswer?.answer === answer}>
                        <button disabled={!!props.userAnswer?.correctAnswer} value={answer} onClick={props.checkAnswer}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </ButtonWrapper>
                );
            })}</div>
        </Wrapper>
    )
}