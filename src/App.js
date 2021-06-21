import {useState} from 'react';
import Welcome from './components/Welcome'
import JokeComponent from './components/JokeComponent';
import {Button, MarginDiv} from './styled';

function App() {
  const welcome = 'welcome';
  const joke = 'joke';

  const [location, setLocation] = useState(welcome)

    const handleClick = () => {
     if (location === welcome) {
      setLocation(joke)
     } else {
      setLocation(welcome)
     }
    };

  return (
    <MarginDiv>
        {location === welcome ? <Welcome/> : <JokeComponent/>}
       <Button onClick= {handleClick}>{location === welcome ? "Acceder" : "Atras"}  </Button>
   </MarginDiv>
  );
}

export default App;
