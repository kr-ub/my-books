import React, { useRef } from 'react';

export default function SigninForm({ login, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const errorEmailMsgRef = useRef();
  const errorPwMsgRef = useRef();

  return (
    <>
      {loading && <div className="loader">로딩 중...</div>}
      <div className="effect horizontal"></div>
      <div className="effect horizontal"></div>
      <div className="effect horizontal"></div>
      <div className="effect horizontal"></div>
      <div className="effect vertical"></div>
      <div className="effect vertical"></div>
      <div className="effect vertical"></div>
      <div className="effect vertical"></div>
      <div className="book">
        <div className="cover"></div>
        <h2>
          Front <span>End</span>
        </h2>
        <span>
          Design By <i>UB</i>
        </span>
      </div>
      <div className="signin-container">
        <div className="imgBx"></div>
        <div className="mainBx">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>sign in</h1>
            <input type="text" ref={emailRef} />
            <p ref={errorEmailMsgRef}></p>
            <input type="password" ref={passwordRef} />
            <p ref={errorPwMsgRef}></p>
            <div className="btn-group">
              <button onClick={click}>로그인</button>
              <button>회원가입</button>
              <button>아이디/비밀번호 찾기</button>
            </div>
          </form>
          <div className="decoration">
            <div className="content">
              <h2>Decoration</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                eos ducimus id! Quas exercitationem harum ex in vero ipsam saepe
                architecto laudantium debitis praesentium eum dolor iste, animi
                ipsum quae. Quos quas, recusandae cum illo eligendi molestiae
                maxime vero ullam error! Impedit rerum obcaecati fugiat, fuga
                laboriosam officia eveniet nemo doloremque ipsa sed nesciunt,
                amet nam eaque et perspiciatis! Veniam. Dolorem, quod veritatis
                nihil odio doloremque eum expedita natus quis sapiente similique
                iusto? Error, eius? Sapiente quaerat quisquam commodi voluptatum
                temporibus, nemo tempore harum dolorem, eligendi officiis ipsa,
                eos esse!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function click() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === '' || password === '') return;
    login(email, password);
  }
}
