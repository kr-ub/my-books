import React, { useCallback } from 'react';
import SigninForm from '../components/SigninForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginSagaActionCreator } from '../redux/modules/auth';

export default function SigninFormContainer() {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const login = useCallback(
    (email, password) => {
      dispatch(startLoginSagaActionCreator(email, password));
    },
    [dispatch],
  );
  return <SigninForm login={login} loading={loading} />;
}
