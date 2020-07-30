import React from "react";
import axios from "axios";
import {message} from "antd";
import withAuth from "../hocs/withAuth";
import "./signin.scss";

class Signin extends React.Component {
  state = {
    email: "",
  };
  passwordRef = React.createRef(); // 한번 만들어지면 객체 인스턴스는 그대로
  render() {
    return (
      <div className="signin-body">
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
            <form>
              <h1>sign in</h1>
              <input
                type="text"
                value={this.state.email}
                onChange={this.change}
              />
              <input type="password" ref={this.passwordRef} />
              <button onClick={this.click}>로그인</button>
              <button>회원가입</button>
              <button>아이디/비밀번호 찾기</button>
            </form>
            <div className="decoration">
              <div className="content">
                <h2>Decoration</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  eos ducimus id! Quas exercitationem harum ex in vero ipsam
                  saepe architecto laudantium debitis praesentium eum dolor
                  iste, animi ipsum quae. Quos quas, recusandae cum illo
                  eligendi molestiae maxime vero ullam error! Impedit rerum
                  obcaecati fugiat, fuga laboriosam officia eveniet nemo
                  doloremque ipsa sed nesciunt, amet nam eaque et perspiciatis!
                  Veniam. Dolorem, quod veritatis nihil odio doloremque eum
                  expedita natus quis sapiente similique iusto? Error, eius?
                  Sapiente quaerat quisquam commodi voluptatum temporibus, nemo
                  tempore harum dolorem, eligendi officiis ipsa, eos esse!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  click = async () => {
    console.log("login", this.state.email, this.passwordRef.current.value);

    const email = this.state.email;
    const password = this.passwordRef.current.value;

    if (email === "" || password === "") return;

    try {
      const response = await axios.post("https://api.marktube.tv/v1/me", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      // 2. 홈으로 이동시킨다.
      this.props.history.push("/");
    } catch (error) {
      const errorCode = error?.response?.data?.error || "NOT_MATCH";
      if (errorCode === "PASSWORD_NOT_MATCH") {
        message.error("패스워드가 일치하지 않습니다.");
      } else if (errorCode === "USER_NOT_EXIST") {
        message.error("없는 이메일입니다.");
      } else {
        message.error("에러");
      }
    }
  };

  change = (e) => {
    this.setState({email: e.target.value});
  };
}

export default withAuth(Signin, false);
