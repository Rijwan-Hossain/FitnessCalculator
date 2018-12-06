import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import Gym from './Components/GymComponent/Gym';
import Men from './Components/DietComponent/MenComponent/Men';
import Women from './Components/DietComponent/WomenComponent/Women';

import Error from './Components/Error';
import Navigation from './Components/Navigation';

class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <div> 
          <Navigation /> 
          <Switch> 
            <Route path="/" component={ Home } exact /> 
            <Route path="/gym" component={ Gym } /> 
            <Route path="/men" component={ Men } /> 
            <Route path="/women" component={ Women } /> 
            <Route component={ Error } /> 
          </Switch> 
        </div> 
      </BrowserRouter> 
    );
  }
}

export default App; 
