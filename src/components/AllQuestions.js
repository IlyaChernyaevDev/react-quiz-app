import React, { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import Question from './Question';

const AllQuestions = () => {
  const [url, setUrl] = useState('https://opentdb.com/api.php?amount=1');
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  const getQuestions = async () => {
    const response = await fetch(url);
    const questions = await response.json();
    const fillterArray = replaceAllSpecialCharacters(questions.results);
    setQuestions(fillterArray);
  };

  const replaceAllSpecialCharacters = (array) => {
    if (Array.isArray(array)) {
      return array.map(
        ({
          question,
          correct_answer,
          incorrect_answers,
          ...otherPropertis
        }) => {
          return {
            question: decode(question),
            correct_answer: decode(correct_answer),
            incorrect_answers: incorrect_answers.map((answer) => {
              return decode(answer);
            }),
            ...otherPropertis,
          };
        }
      );
    }
  };

  const answerHandler = (answer) => {
    const corrcetAnswer = questions[questionsCount].correct_answer;
    setQuestionsCount(questionsCount + 1);
    console.log(corrcetAnswer);
    console.log(answer);

    if (answer === corrcetAnswer) {
      setCorrectAnswerCounter(correctAnswerCounter + 1);
    }
    if (questionsCount >= questions.length - 1) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    getQuestions();
    replaceAllSpecialCharacters();
  }, []);

  return (
    <>
      {gameOver ? (
        <div>
          <h2>You Score {correctAnswerCounter}</h2>
          <button
            onClick={() => {
              setUrl('https://opentdb.com/api.php?amount=11');
            }}
          >
            play again
          </button>
        </div>
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

export default AllQuestions;
