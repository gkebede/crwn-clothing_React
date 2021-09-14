import React from 'react';

import './google-signIn.style.scss';

const GoogleSign = ({children, ...otherProps}) => {
  return (
      <button className="custom">{children}</button>
  );
}

export default GoogleSign;