import React from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <h1>This is search page</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
