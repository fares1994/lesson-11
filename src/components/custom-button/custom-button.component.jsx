import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn,isInverted, ...otherProps }) => (
  <button
    {...otherProps}
    className= {`${isInverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
