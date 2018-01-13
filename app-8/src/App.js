import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Details from './Details';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'><p>Home</p></Link>
          <Link to='/signup'><p>Sign Up</p></Link>
          <Link to='/details'><p>Details</p></Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/details" component={Details}/>
        </Switch>


      </div>
    );
  }
}

export default App;
