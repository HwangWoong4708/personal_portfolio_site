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
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="dark" type="button" style={loginButton} block>
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
