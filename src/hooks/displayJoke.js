import { useState, useEffect } from 'react';

export const useJokeFetch = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [jokeData, setJokeData] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        console.log('hello')

        console.log(url)
        console.log('Fetching joke data...');
        fetch(url)
        .then(response => response.json())
        .then (data => {
            if (data.type === 'twopart') {
                setIsLoading(false)
                setJokeData([data.setup, data.delivery])
            } else {
                setIsLoading(false)
                setJokeData([data.joke])
            }
            
            
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false);
            setJokeData('No jokes found');
        })
        

    }, [url])

    return [isLoading, jokeData];

}