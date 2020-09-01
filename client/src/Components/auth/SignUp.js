import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class SignUp extends React.Component {
  signUp = () => {
    const signupEmail = this.signupEmail.value;
    const signupName = this.signupName.value;
    const signupPassword = this.signupPassword.value;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (signupEmail === "" || signupEmail === undefined) {
      alert("이메일을 입력해주세요");
      this.signupEmail.value = "";
      this.signupEmail.focus();
      return;
    } else if (
      signupEmail.match(regExp) === null ||
      signupEmail.match(regExp) === undefined
    ) {
      alert("이메일 형식에 맞게 입력해주세요");
      this.signupEmail.value = "";
      this.signupEmail.focus();
      return;
    } else if (signupName === "" || signupName === undefined) {
      alert("이름을 입력해주세요");
      this.signupName.focus();
      return;
    } else if (signupPassword === "" || signupPassword === undefined) {
      alert("비밀번호를 입력해수세요");
      this.signupPassword.focus();
      return;
    } else if (
      signupPassword.match(regExp2) === null ||
      signupPassword.match(regExp2) === undefined
    ) {
      alert(
        "비밀번호 형식에 맞게 입력해주세요. (문자와 숫자,특수문자를 포함한 8~16자)"
      );
    }
  };
  render() {
    const imgStyle = {
      margin: "20%",
    };
    const signupButton = {
      marginBottom: "10px",
    };
    const signupStyle = {
      width: "60%",
      margin: "0 auto",
      marginTop: "20%",
    };

    return (
      <div>
        <Form>
          <Row>
            <Col>
              <img src="study.jpg" alt="profile" style={imgStyle} />
            </Col>
            <Col>
              <Form.Group className="loginInput" style={signupStyle}>
                <Form.Label>회원가입(Join Member)</Form.Label>
                <Form.Group className="formGroupEmail">
                  <Form.Label>이메일 주소</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    ref={ref => (this.signupEmail = ref)}
                  />
                </Form.Group>
                <Form.Group className="formGroupName">
                  <Form.Label>이름</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    ref={ref => (this.signupName = ref)}
                  />
                </Form.Group>
                <Form.Group className="formGroupPassword">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    ref={ref => (this.signupPassword = ref)}
                  />
                </Form.Group>
                <Button
                  variant="dark"
                  type="button"
                  style={signupButton}
                  onClick={this.signUp}
                  block
                >
                  회원가입
                </Button>
                <Form.Text className="text-muted">
                  이미 계정을 가지고 계신가요? / 회원가입을 완료하셨나요?
                </Form.Text>
                <Link to="/Login">
                  <Button variant="dark" type="button" block>
                    로그인하러 가기
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

export default SignUp;
