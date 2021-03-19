import { useState, useEffect, useCallback } from 'react';
import { decode } from 'html-entities';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const getQuestions = useCallback(async () => {
    const response = await fetch(url);
    const questions = await response.json();
    const fillterArray = replaceAllSpecialCharacters(questions.results);
    console.log(questions);
    setQuestions(fillterArray);
    setLoading(false);
  }, [url]);

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

  useEffect(() => {
    getQuestions();
  }, [url, getQuestions]);

  return {loading, questions}
};
