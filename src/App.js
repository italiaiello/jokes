import React, { useState } from 'react';
import Criteria from './components/Criteria/Criteria';
import { useJokeFetch } from './hooks/displayJoke';
import './App.css';

const App = () => {

  const [categories, setCategories] = useState([])
  const [flags, setFlags] = useState([])
  const [type, setType] = useState('')
  const [isLoading, jokeData] = useJokeFetch(`https://sv443.net/jokeapi/v2/joke/${categories.length ? categories.join(',') : 'Any'}?format=json&blacklistFlags=${flags.length ? flags.join(',') : ''}&type=${type}`)

  console.log(categories, flags)

  return (
    <div className="App">
      <div className="joke-section">
        <h1>Joke Generator</h1>
        <div className="joke-container">
          {
            !jokeData.length ?
            <h2>Use the filter below to search for a joke:</h2>
            :
            (
              isLoading ?
              <h2>Loading joke...</h2>
              :
              jokeData.length === 2 ?
              <div>
                <p>{jokeData[0]}</p>
                <p>{jokeData[1]}</p>
              </div>
              :
              <p>{jokeData[0]}</p>
            )
            
          }
        </div>
      </div>
      <Criteria categories={categories}
                setCategories={setCategories} 
                flags={flags}
                setFlags={setFlags} 
                type={type}
                setType={setType} 
      />
    </div>
  );
}

export default App;
