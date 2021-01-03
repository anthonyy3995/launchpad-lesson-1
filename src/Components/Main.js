import React, {useState, createContext, useContext, useEffect} from 'react';

import '../App.css';
import './style2.css';
import NavBar from './NavBar';
import Hero from './Hero';
import RiceappsHeading from './RiceappsHeading';
import DescriptionBoxes from './DescriptionBoxes';
import OSA from './OSA';
import Launchpad from './Launchpad';
import SocialGood from './SocialGood';
import Main from './Main';
//import { RoutesComponent } from './Components/Routes';

//not importing for some reason
// import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router, 
  Switch,
  Route, 
} from 'react-router-dom';

export const DarkModeContext = createContext(false);


function App() {
  const [getDarkMode, setDarkMode] = useState(false);


  useEffect(() => {
    console.log("Request to SWAPI");
    let url = 'https://swapi.dev/api/starships/12/'
    fetch(url).then(
			result => console.log(result)
		)
  }, []);

  // useEffect(async () => {
  //   console.log("Async Request to SWAPI");
  //   const result = await fetch(https://swapi.dev/api/people/1/);
  //   console.log(result);
  // }, []);
  

  return (
    <div className="App container">

      <DarkModeContext.Provider value={getDarkMode}>
        <NavBar getDarkMode={getDarkMode} setDarkMode={setDarkMode} />
      </DarkModeContext.Provider> 

      
      <Hero />
      <div style = {{ backgroundColor: getDarkMode ? '#86dad3' : '#faa1bc'}}> 
        <RiceappsHeading />
        <DescriptionBoxes />
      </div>

      {/* <RoutesComponent /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/osa" component={OSA} />
          <Route path="/launchpad" component={Launchpad} />
          <Route path="/socialgood" component={SocialGood} />
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;