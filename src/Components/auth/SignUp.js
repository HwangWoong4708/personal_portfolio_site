import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
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
            <Form.Group className="formGroupEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="formGroupName">
              <Form.Label>이름</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="formGroupPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="button" style={loginButton} block>
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
        </Form>
      </div>
    );
  }
}

export default SignUp;
