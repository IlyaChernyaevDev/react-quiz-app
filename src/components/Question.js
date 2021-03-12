import React from 'react';

const Question = ({ question, correct_answer, incorrect_answers, answerHandler }) => {
  const allAnswers = [correct_answer, ...incorrect_answers].sort();
  return (
    <>
      <h1>{question}</h1>
      {allAnswers.map((answer, index) => {
        return (
          <button
            key={index}
            onClick={(e) => answerHandler(e.target.value)}
            value={answer}
          >
            {answer}
          </button>
        );
      })}
    </>
  );
};

export default Question;
