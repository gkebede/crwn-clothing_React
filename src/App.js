import React from 'react';
import {Route, Switch} from 'react-router-dom';


import HomePage  from './pages/homepage/homepage.component';
 // import MenuItem from './components/menu-item/menu-item.component';
 const Hello = () => {
   return <div>Hello Wrold</div>
 }

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={Hello} />
      </Switch>
    </div>
  );
}

export default App;
