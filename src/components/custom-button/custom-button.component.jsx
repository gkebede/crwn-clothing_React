import React from 'react';

import './custom-button.style.scss';

 import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (

      <CustomButtonContainer   {...props}>  {children} </CustomButtonContainer>

)

// const CustomButton = ({children, inverted, isGoogleSignIn, ...otherProps}) => {
//  return (
//       <button 
//       className={ `${inverted ? 'inverted' : ''} ${
//                     isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
//             {...otherProps}
//       >
//             {children}
//     </button>
//  )
// }   

export default CustomButton;