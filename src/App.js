import React, { useState } from 'react';
import Criteria from './components/Criteria/Criteria';
import { useJokeFetch } from './hooks/displayJoke';
import './App.css';

const App = () => {

  const [flags, setFlags] = useState(['Any'])
  const [type, setType] = useState()
  const [isLoading, jokeData] = useJokeFetch(`https://sv443.net/jokeapi/v2/joke/${flags.join('')}`, flags, type)
  console.log(jokeData)
  return (
    <div className="App">
      {
        isLoading ?
        <h2>Loading joke...</h2>
        :
        <p>{jokeData.category}</p>
      }
      <Criteria />
    </div>
  );
}

export default App;
