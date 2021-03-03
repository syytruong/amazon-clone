import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch path="/">
          <Header />
          <Home />
        </Switch>

        <Switch path="/checkout">
          <Header />
          <h1>I am the checkout Route</h1>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
