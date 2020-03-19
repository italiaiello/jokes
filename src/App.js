import React, { useState } from 'react';
import Criteria from './components/Criteria/Criteria';
import { useJokeFetch } from './hooks/displayJoke';
import './App.css';

const App = () => {

  const [categories, setCategories] = useState(['Any'])
  const [flags, setFlags] = useState([])
  const [type, setType] = useState('')
  const [isLoading, jokeData] = useJokeFetch(`https://sv443.net/jokeapi/v2/joke/${categories.join(',')}?format=json?${flags.length ? flags.join(',') : ''}`, categories, type)

  return (
    <div className="App">
      {
        isLoading ?
        <h2>Loading joke...</h2>
        :
        (
          jokeData.length === 2 ?
          <div>
            <p>{jokeData[0]}</p>
            <p>{jokeData[1]}</p>
          </div>
          :
          <p>{jokeData[0]}</p>
        )
        
      }
      <Criteria setCategories={setCategories} setFlags={setFlags} setType={setType} />
    </div>
  );
}

export default App;
