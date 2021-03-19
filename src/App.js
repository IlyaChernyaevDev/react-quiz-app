import './App.css';
import React, { useState } from 'react';
import AllQuestions from './components/AllQuestions';
import Form from './components/Form';

function App() {
  const [formSumbit, setFormSubmit] = useState(false);
  const [formData, setFormData] = useState({ category: '', difficulty: '' });

  return (
    <>
      {formSumbit ? (
        <AllQuestions
          {...formData}
          setFormSubmit={setFormSubmit}
          setFormData={setFormData}
        />
      ) : (
        <Form setFormData={setFormData} setFormSubmit={setFormSubmit} />
      )}
    </>
  );
}

export default App;
