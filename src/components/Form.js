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
            question: replaceSpecialCharacters(question),
            correct_answer: replaceSpecialCharacters(correct_answer),
            incorrect_answers: incorrect_answers.map((answer) => {
              return replaceSpecialCharacters(answer);
            }),
            ...otherPropertis,
          };
        }
      );
    }
  };

  const replaceSpecialCharacters = (string) => {
    return string
      .replace(/&quot;/g, '"')
      .replace(/&rsquo;/g, '’')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&ouml;/g, 'ö');
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
  }, [mainApiUrl]);

  return (
    <>
      {gameOver ? (
        <h2>You Score{correctAnswerCounter}</h2>
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
