import React, { useState } from 'react';
import Criteria from './components/Criteria/Criteria';
import { useJokeFetch } from './hooks/displayJoke';
import './App.css';

const App = () => {

  const [categories, setCategories] = useState([])
  const [flags, setFlags] = useState([])
  const [type, setType] = useState('')
  const [isLoading, jokeData] = useJokeFetch(`https://sv443.net/jokeapi/v2/joke/${categories.length ? categories.join(',') : 'Any'}?format=json&blacklistFlags=${flags.length ? flags.join(',') : ''}&type=${type}`, categories, flags, type)

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
      <Criteria categories={categories}
                setCategories={setCategories} 
                flags={flags}
                setFlags={setFlags} 
                type={type}
                setType={setType} />
    </div>
  );
}

export default App;
