import React from 'react';

import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'
// import GoogleSign from '../google-signIn/google-signIn.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {
    
state = {email: '', password: ''} 

handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});

}

handleSubmit = async event => {

    event.preventDefault();

    const {email, password} =   this.state;
    try {
        
        await auth.signInWithEmailAndPassword(email.trim(), password.trim());

    this.setState({email: '', password:''});

    } catch (error) {
        console.log(error.message);
    }

}

render() {

  return ( 
  <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span> Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
        
            <FormInput 
                handleChange={this.handleChange}
                name='email'  
                type="email" 
                value={(e)=>e.target.value} 
                label="Email"
                required
            />

       
       
            <FormInput 
                handleChange={this.handleChange}
                name='password'
                type="password" 
                value={(e)=>e.target.value} 
                label="password"
                required
            />
        
        
        <div className="buttons">
           <CustomButton type="submit">
               Sign In
           </CustomButton>

           <CustomButton type="button" onClick= {signInWithGoogle} isGoogleSignIn>
            Google Signin
           </CustomButton>
        </div>
           
        </form>
    
    </div>
  )
}

}

export default SignIn;
