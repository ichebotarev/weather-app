import {useState} from 'react';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken';
import WeatherSearch from './components/WeatherSearch';

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
  
    <div className="wrapper">
      <WeatherSearch/>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
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
