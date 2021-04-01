import React from 'react';
import Navbar from './componets/Navbar';
import './App.css';
import Home from './componets/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './componets/pages/Services';
import Products from './componets/pages/Products';
import SignUp from './componets/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

