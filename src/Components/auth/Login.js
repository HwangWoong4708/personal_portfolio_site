import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
  login = () => {
    const loginEmail = this.loginEmail.value;
    const loginPassword = this.loginPassword.value;

    if (loginEmail === "" || loginEmail === undefined) {
      alert("이메일 주소를 입력해주세요");
      this.loginEmail.value = "";
      this.loginEmail.focus();
      return;
    } else if (loginPassword === "" || loginPassword === undefined) {
      alert("비밀번호를 입력해주세요");
      this.loginPassword.value = "";
      this.loginPassword.focus();
      return;
    }
  };

  render() {
    const loginButton = {
      marginBottom: "10px",
    };
    const loginStyle = {
      width: "40%",
      margin: "0 auto",
      marginTop: "30px",
    };
    return (
      <div>
        <Form>
          <Form.Group className="loginInput" style={loginStyle}>
            <Form.Label>로그인(Enter)</Form.Label>

            <Form.Group className="formGroupEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control
                type="email"
                maxLength="100"
                ref={ref => (this.loginEmail = ref)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="formGroupPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                maxLength="20"
                ref={ref => (this.loginPassword = ref)}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="dark"
              type="button"
              style={loginButton}
              onClick={this.login}
              block
            >
              로그인
            </Button>
            <Link to="/SignUp">
              <Button variant="dark" type="button" style={loginButton} block>
                회원가입하러 가기
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SignUp;
