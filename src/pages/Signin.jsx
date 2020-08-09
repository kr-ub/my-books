import React from 'react';
import SigninFormContainer from '../containers/SigninFormContainer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './signin.scss';

function Signin() {
  const token = useSelector((state) => state.auth.token);
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signin-body">
      <SigninFormContainer />
    </div>
  );
}

export default Signin;
