import './App.css';
import React, { useState } from 'react';
import AllQuestions from './components/AllQuestions';
import Form from './components/Form';

function App() {
  const [formSumbit, setFormSubmit] = useState(false);
  return (
    <>
      {formSumbit ? <AllQuestions /> : <Form />} 
    </>
  );
}

export default App;
