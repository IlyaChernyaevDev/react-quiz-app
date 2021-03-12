import React, { useState, useEffect } from 'react';
import Question from './Question';

const mainApiUrl = 'https://opentdb.com/api.php?amount=10';

const Form = () => {
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  const getQuestions = async () => {
    const response = await fetch(mainApiUrl);
    const questions = await response.json();
    setQuestions(questions.results);
  };

  const answerHandler = (answer) => {
    const corrcetAnswer = questions[questionsCount].correct_answer;
    setQuestionsCount(questionsCount + 1);
    if (answer === corrcetAnswer) {
      setCorrectAnswerCounter(correctAnswerCounter + 1);
    }
    if (questionsCount >= questions.length - 1) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {gameOver ? (
        <h1>You Score{correctAnswerCounter}</h1>
      ) : (
        questions[questionsCount] &&
        questions[questionsCount].incorrect_answers && (
          <Question
            {...questions[questionsCount]}
            answerHandler={answerHandler}
          />
        )
      )}
    </>
  );
};

export default Form;
