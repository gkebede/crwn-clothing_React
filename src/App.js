import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';


import "./App.css";
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from "./pages/homepage/homepage.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import ShopePage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {setUserAction} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
<<<<<<< HEAD
import CollectionPage from "./pages/collection/collection.component";

=======
>>>>>>> a5946c2fc1f0dd71eee4b3232b287e84c221c196

class App extends React.Component {
 // state = { currentUser: null };
  state = { hide: true };

 
  unSubscribeFromAuth = null;


  componentDidMount() {
  
    const {setCurrentUser} = this.props;
  
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
         
        userRef.onSnapshot((snapshot) => {

         // console.log(snapshot);
         // this.setState({
         //  this.props.setCurrentUser({
           setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
         });

         console.log(this.state);

        });
      }

     // this.setState({ currentUser: userAuth });
     setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    // component display using Route has 1-Subject 2-match and 3-pathName
    return (
      <div>
        <Header />
        <Switch>
          
          <Route exact path="/" component={HomePage} />
<<<<<<< HEAD
          <Route  path="/shop" component={ShopePage} />
          <Route exact path="/shop/:collectionId" component={CollectionPage} />
=======
          <Route exact path="/shop" component={ShopePage} />
>>>>>>> a5946c2fc1f0dd71eee4b3232b287e84c221c196
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin"  render={ () => {
          
       return   this.props.currentUser ? (
               
               <Redirect to='/'/>
               ) : (
                 <SignInAndSignUpPage />
               )
               }
        } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

   currentUser: selectCurrentUser

}
) 
// const mapStateToProps = ({user}) => {
//  return {currentUser: user.currentUser}
// }

const mapDispatchToProps = (dispatch) => {

 return {setCurrentUser: user => dispatch(setUserAction(user))}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
