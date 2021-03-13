import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';

const Question = ({
  question,
  correct_answer,
  incorrect_answers,
  answerHandler,
}) => {
  const allAnswers = [correct_answer, ...incorrect_answers].sort();
  return (
    <>
      <h2
        style={{
          marginBottom: '2rem',
          lineHeight: '1.5',
          textTransform: 'none',
        }}
      >
        {question.replace(/&quot;/g, '"')}
      </h2>
      <Grid container>
        {allAnswers.map((answer, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                color='primary'
                key={index}
                onClick={(e) => answerHandler(e.target.value)}
                value={answer}
              >
                {answer}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Question;
