import React from 'react'
import Home from './pages/home'
import {  BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component={Home}/>                
        <Route path='/search' exact component={SearchPage}/>                    
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
