import React from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage/>
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
