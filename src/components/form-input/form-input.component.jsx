import React from 'react';

import './form-input.style.scss'

const FormInput = ({handleChange,type,  label, ...otherProps}) => {
   return (<div className="group">
        <input
         type={type}
         className="form-input"
         onChange= {handleChange}
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