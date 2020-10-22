import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import Game from './Game';
import Intro from './Intro';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/intro/game' component={Game}></Route>
        <Route path='/intro' component={Intro}></Route>
        <Redirect to="/intro" />
      </Switch>
    </div>
  );
}

export default App;
