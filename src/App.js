import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

import PreFooter from './components/PreFooter'
import Footer from './components/Footer'



function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <PreFooter />
      <Footer />
    </Router>
  );
}
  
export default App;
