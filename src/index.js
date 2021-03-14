import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Grid} from '@material-ui/core';
import './index.css';

ReactDOM.render(
  <Grid container spacing={0} align='center' justify='center' style={{ backgroundColor: 'white',borderRadius: '15px', margin: 'auto', width: '650px', height: 'fit-content'}}>
    <App />
  </Grid>,
  document.getElementById('root')
);
