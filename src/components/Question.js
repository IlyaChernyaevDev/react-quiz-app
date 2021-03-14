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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem',
        justifyContent: 'space-between',
      }}
    >
      <h2
        style={{
          marginTop: '0',
          marginBottom: '2rem',
          lineHeight: '1.5',
          textTransform: 'none',
        }}
      >
        {question}
      </h2>
      <Grid container>
        {allAnswers.map((answer, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Button
                style={{margin: '10px'}}
                width='90%'
                variant='outlined'
                key={index}
                onClick={(e) => answerHandler(e.target.value)}
              >
                {answer}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Question;
