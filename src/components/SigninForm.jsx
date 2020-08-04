import React, { useRef } from "react";

export default function SigninForm({ login }) {
  const emailRef = useRef();
  const pwRef = useRef();
  return (
    <div>
      <p>
        <input type="text" ref={emailRef} />
      </p>
      <p>
        <input type="password" ref={pwRef} />
      </p>
      <p>
        <button onClick={click}>로그인</button>
      </p>
    </div>
  );
  function click() {
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    if (email === "" || pw === "") return;
    login(email, pw);
  }
}
