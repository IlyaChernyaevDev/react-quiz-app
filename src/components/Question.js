import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

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
        {allAnswers.map((answer) => {
          return (
            <Grid item xs={12} sm={6} key={uuidv4()}>
              <Button
                style={{ margin: '10px' }}
                width='90%'
                variant='outlined'
                key={uuidv4()}
                value={answer}
                onClick={(e) => answerHandler(e.currentTarget.value)}
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
