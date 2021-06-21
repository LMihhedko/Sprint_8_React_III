import './App.css';
import {useState} from 'react';


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
    <div>
      <h1>Titulo</h1>
      <div>{joke}</div>
      <br/>
      <button onClick = {getJoke} >Siguiente</button>
    </div>
  );
}

export default App;
