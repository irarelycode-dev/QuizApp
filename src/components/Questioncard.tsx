import React from 'react';

interface Props {
    question: string;
    answers: string[];
    checkAnswer: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div>
            <p className="number">Question:{props.questionNr}/{props.totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: props.question }} />
            <div>{props.answers.map((answer, index) => {
                return (
                    <div key={index}>
                        <button disabled={props.userAnswer} value={answer} onClick={props.checkAnswer}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </div>
                );
            })}</div>
        </div>
    )
}