import React, { useCallback } from "react";
import SigninForm from "../components/SigninForm";
import { useDispatch } from "react-redux";
import { loginThunk } from "../actions";
import { useHistory } from "react-router-dom";

export default function SigninFormContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useCallback(
    (email, password) => {
      dispatch(loginThunk(email, password, history));
    },
    [dispatch, history]
  );
  return <SigninForm login={login} />;
}
