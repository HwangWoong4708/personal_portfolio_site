import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Login extends React.Component {
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
      width: "70%",
      margin: "0 auto",
      marginTop: "20%",
    };

    const imgStyle = {
      margin: "20%",

      //width: "100%",
    };
    const loginRowStyle = {
      width: "100%",
    };
    return (
      <div>
        <Form>
          <Row style={loginRowStyle}>
            <Col>
              <img src="study.jpg" alt="profile" style={imgStyle} />
            </Col>
            <Col>
              <Form.Group className="loginInput" style={loginStyle}>
                <Form.Label>로그인(Login)</Form.Label>

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
                  <Button
                    variant="dark"
                    type="button"
                    style={loginButton}
                    block
                  >
                    회원가입하러 가기
                  </Button>
                </Link>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
