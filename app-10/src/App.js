import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Display from './Display';
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <Link to='/pokemon'><p>Pokemon</p></Link>
            <Link to='/stats'><p>Stats</p></Link>
          </nav>
          <Switch>
            <Route path='/pokemon' component={Products}/>
            <Route path='/stats' component={Display}/>
          </Switch>
      </div>
    );
  }
}

export default App;
