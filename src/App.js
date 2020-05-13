import React from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
      </Switch>
      </Router>
    </div>
  )
}

export default App;
