import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import FormInput from '../form-input/form-input.component';
import CustomButton  from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.style.scss';

class SignUp extends React.Component {

    constructor () {
      super();
       this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '' 
        }
    }


    handleSubmit =  async  event => {

        const {displayName, email, password, confirmPassword} = this.state;
        
        event.preventDefault();
        if(password !== confirmPassword){
            alert('password don\'t much');
            return;
        }

        try {

        const auth = getAuth();
       const {user} = await createUserWithEmailAndPassword(auth, email.trim(), password)

          //  const {user} = await auth.createUserWithEmailAndPassword(email.trim(), password)
                         
              await createUserProfileDocument({user}, {displayName});

                this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })

        } catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
        
            console.log(`errorCode <=> ${errorCode} \n errorMessage <=> ${errorMessage} `);
        }

    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){

        const {displayName, email, password, confirmPassword} = this.state;

      return(
          <div className="sign-up">
              <h2 className="title"> I  do not have an account</h2>
              <span >Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput 
                type="text"
                name="displayName"
                value={displayName.trim()}
                onChange={this.handleChange}
                label="Display Name"
                required
            />
            <FormInput 
                handleChange={this.handleChange}
                name="email"  
                type="email" 
                value={email.trim()} 
                label="Email"
                required
            />
            <FormInput 
                handleChange={this.handleChange}
                name="password"
                type="password" 
                value={password.trim()} 
                label="password"
                required
            />
            <FormInput 
                type="password"
                name="confirmPassword"
                value={confirmPassword.trim()}
                onChange={this.handleChange}
                label="Confirm Password"
                required
            />

            <CustomButton type="submit">Sign Up</CustomButton>

        </form>

          </div>
      ) 
    }
}

export default SignUp; 