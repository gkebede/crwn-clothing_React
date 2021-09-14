import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'
// import SingUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.style.scss';

const SignInandSignUpPage = () => {

    return (
    <div className="sign-in-and-sign-up">
       {/* <SingUp/> */}
       <SignIn />
    </div>
    );

}

export default SignInandSignUpPage;

