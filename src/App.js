import React from 'react';
import {Route, Switch} from 'react-router-dom';


import HomePage  from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import './App.css';


function App() {

  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
