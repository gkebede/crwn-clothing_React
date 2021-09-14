import React from 'react';
import {Route, Switch} from 'react-router-dom';


import HomePage  from './pages/homepage/homepage.component';
import {auth} from './firebase/firebase.utils';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import './App.css';


class App extends React.Component {

state = {currentUser: null}
   unSubscribeFromAuth = null
componentDidMount () {
     auth.onAuthStateChanged(user => {
     this.setState({currentUser: user},
      
      () => { console.log(user)
      }
      
      )
  },
  error => {
    console.log(error)
  } 
  )
}

componentWillUnmount() {
  this.unSubscribeFromAuth();
}
  render(){

      return (
        <div>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopePage} />
          <Route path='/signin' component={SignInAndSignUpPage}/>

          </Switch>
        </div>
      );
  }
}

export default App;
