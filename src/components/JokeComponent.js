import React from 'react';
import WeatherComponent from './WeatherComponent'
import {useState} from 'react';
import {Background, JokeContainer, CenterJokes, Button} from '../styled';



function JokeComponent() {

    const [joke, setJoke] = useState('');

    const getJoke = async () => {
      const data = await fetch ('https://icanhazdadjoke.com/', {
        headers : { 
          'Accept': 'application/json'
         }
  
      })
  
      const jokes = await data.json()
      const newJoke = jokes.joke
      
      setJoke(newJoke)
    }

  return (
      
    <Background>
    <CenterJokes>
        <JokeContainer>
            <h1>Preparat per riure? 😂</h1>
            <div>{joke}</div>
            <br/>
            <Button onClick = {getJoke} >Siguiente</Button>
        </JokeContainer>
    </CenterJokes>
    <WeatherComponent></WeatherComponent>
    </Background>
  );
}

export default JokeComponent;
