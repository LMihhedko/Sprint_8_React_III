import './App.css';
import {useState} from 'react';
import {Background, JokeContainer, CenterJokes, Button, Weather} from './styled';


function App() {

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
      <Weather>Avui: parcialment ennuvolat</Weather>
      <CenterJokes>
        <JokeContainer>
        <h1>Preparat per riure? 😂</h1>
        <div>{joke}</div>
        <br/>
        <Button onClick = {getJoke} >Siguiente</Button>
        </JokeContainer>
      </CenterJokes>
    </Background>
  );
}

export default App;
