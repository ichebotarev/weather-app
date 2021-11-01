import {useState} from 'react';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken';
import WeatherSearch from './components/WeatherSearch';
import History from './components/History';
import useStickyState from './components/useStickyState';

function App() {
  const [searchHistory, setSearchHistory] = useStickyState([], "searchHistory");
  const [city, setCity] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  
  return (
  
    <div className="wrapper">
      <WeatherSearch searchHistory = {searchHistory} setSearchHistory={setSearchHistory} city={city} setCity={setCity} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <BrowserRouter>
        <Switch>
          <Route path="/history">
            <History searchHistory={searchHistory}/>
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
     
   
  );
}

export default App;
