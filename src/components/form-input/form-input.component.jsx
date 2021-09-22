import React from 'react';

import './form-input.style.scss'

const FormInput = ({handleChange,label, ...otherProps}) => {
   return (<div className="group">
        <input
       //  type ={type} I had  issues may be b/c of this type here
       // or may be I did otherProps instead of ...otherProps
         className="form-input"
         onChange= {handleChange}
         {...otherProps}

         />
         
         {
             label? 
             (
                <label className={`${otherProps.value.length ? 'shrink' : '' 
                                     }   form-input-label`} 
                >

                        {label}

                </label>
             ) : null
         }
    </div>
   )
}

export default FormInput;