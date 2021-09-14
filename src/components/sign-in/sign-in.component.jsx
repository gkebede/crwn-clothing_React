import React from 'react';

import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'
// import GoogleSign from '../google-signIn/google-signIn.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

class SignIn extends React.Component {
    
state = {email: '', password: ''} 

handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});

}

handleSubmit = (event) => {
    console.log(event);

    event.preventDefault();
    this.setState({email:this.state.email, password: this.state.password});

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
                value={this.state.email} 
                label="Email"
                required
            />

       
       
            <FormInput 
                handleChange={this.handleChange}
                name='password'
                type="password" 
                value={this.state.password} 
                label="password"
                required
            />
        
        
        <div className="buttons">
           <CustomButton type="submit">
               Sign In
           </CustomButton>

           <CustomButton onClick= {signInWithGoogle} isGoogleSignIn>
            SignIn WithGoogle
           </CustomButton>
        </div>
           
        </form>
    
    </div>
  )
}

}

export default SignIn;
