import SignUpForm from '../../components/sign-up/sign-up.component'
import SignInForm from '../..//components/sign-in-form/sign-in.component'

import "./authentication.styles.scss";
import React from 'react';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;