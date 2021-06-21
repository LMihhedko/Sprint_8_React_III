import {useState} from 'react';
import Welcome from './components/Welcome'
import JokeComponent from './components/JokeComponent';
import {Button, MarginDiv} from './styled';
import { Switch, Route, useHistory} from 'react-router-dom';

function App() {
  const history = useHistory()
  const [visibility, setVisibility] = useState(true)

    const handleClick = () => {
      history.push('/jokes')
      setVisibility(false)
      
    };

  return (
    <MarginDiv>
    <Switch>
     <Route path="/jokes">
     <JokeComponent/>
     </Route>
     <Route path="/">
     <Welcome/>
     </Route>
   </Switch>
   {visibility && (
      <Button onClick= {handleClick}> Acceder </Button>
    )}
  
   </MarginDiv>
  
  );
}

export default App;
