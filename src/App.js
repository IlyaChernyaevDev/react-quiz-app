import './App.css';
import React, { useState } from 'react';
import QuestionProcessor from './components/QuestionProcessor/QuestionProcessor';
import Form from './components/Form/Form';

function App() {
  const [formSumbit, setFormSubmit] = useState(false);
  const [formData, setFormData] = useState({ category: '', difficulty: '' });

  return (
    <>
      {formSumbit ? (
        <QuestionProcessor
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
