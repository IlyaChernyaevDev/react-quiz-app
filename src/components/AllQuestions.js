import React, { useState } from 'react';
import Question from './Question';
import { Button } from '@material-ui/core';
import { useFetch } from '../hooks/useFetch';

const AllQuestions = ({category, difficulty, setFormSubmit, setFormData}) => {
  const mainUrl = 'https://opentdb.com/api.php?amount=10';
  const { loading, questions } = useFetch(updateUrl(mainUrl));
  const [gameOver, setGameOver] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

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

  function updateUrl(url) {
    let newUrl = url;
    if(category !== '') {
      newUrl += `&category=${category}`;
    } 
    if(difficulty !== '') {
      newUrl += `&difficulty=${difficulty}`;
    }
    console.log(newUrl);
    return newUrl;
  }

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : gameOver ? (
        <div>
          <h2>Correct answers {correctAnswerCounter}/10</h2>
          <Button
            variant='outlined'
            style={{ margin: '10px' }}
            onClick={() => {
              setFormSubmit(false);
              setFormData({ category: '', difficulty: '' });
            }}
          >
            play again
          </Button>
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
