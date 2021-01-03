import React, {useState, createContext, useContext, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/style2.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import RiceappsHeading from './Components/RiceappsHeading';
import DescriptionBoxes from './Components/DescriptionBoxes';
import OSA from './Components/OSA';
import Launchpad from './Components/Launchpad';
import SocialGood from './Components/SocialGood';
import Main from './Components/Main';
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


  //doesn't work
  useEffect(() => {
    console.log("Request to SWAPI");
    let url = 'https://loripsum.net/api'
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
          {/* <Route path="/" exact component={Main} /> */}
          <Route path="/osa" component={OSA} />
          <Route path="/launchpad" component={Launchpad} />
          <Route path="/socialgood" component={SocialGood} />
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;