import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

const Form = ({ setFormData, setFormSubmit }) => {
  
  const handleChange = (event) => {
    const propName = event.target.name;
    const value = event.target.value;
    setFormData((formData) => {
      return {
        ...formData,
        [propName]: value,
      };
    });
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl style={{ width: '500px', margin: '10px auto 10px auto' }}>
        <InputLabel shrink htmlFor='age-native-label-placeholder'>
          Select Category:
        </InputLabel>
        <Select name='category' native onChange={handleChange}>
          <option value=''>Any Category</option>
          <option value={9}>General Knowledge</option>
          <option value={10}>Entertainment: Film</option>
          <option value={11}>Entertainment: Music</option>
        </Select>
      </FormControl>
      <FormControl style={{ width: '500px', margin: '10px auto 10px auto' }}>
        <InputLabel shrink htmlFor='age-native-label-placeholder'>
          Select Difficulty:
        </InputLabel>
        <Select name='difficulty' native onChange={handleChange}>
          <option value=''>Any Difficulty</option>
          <option value={'easy'}>Easy</option>
          <option value={'medium'}>Medium</option>
          <option value={'hard'}>Hard</option>
        </Select>
      </FormControl>
      <Button
        style={{ marginBottom: '10px' }}
        onClick={() => setFormSubmit(true)}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
