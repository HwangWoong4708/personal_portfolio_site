import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Description = styled.span`
  width: 73%;
  font-size: 38px;
  font-weight: 500;
  text-align: left;
  text-shadow: 0 0 5px #fff;
  max-width: 450px;
  margin: 0;
`;

const Strong = styled.strong`
  font-size: 36px;
  color: #455dff;
  line-height: 1;
  font-weight: 700;
`;

const SubTitle = styled.div`
  max-width: 400px;
  color: #777;
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 40px;
`;

class mainScreen extends React.Component {
  render() {
    const imgStyle = {
      margin: "10%",

      //width: "100%",
    };
    const screenButton = {
      marginLeft: "5px",
    };
    const screenStyle = {
      minWidth: 1080,
    };
    const contentStyle = {
      marginTop: "20px",
    };
    return (
      <div className="mainscreen" style={screenStyle}>
        <div>
          <Form>
            <Row style={contentStyle}>
              <Col>
                <img src="study.jpg" alt="profile" style={imgStyle} />
              </Col>
              <Col>
                <section>
                  <Description>
                    HBD - How to Be a Developer <br />
                    <Strong>프로젝트 관리/분야별, 지역별 스터디 찾기</Strong>
                  </Description>
                  <SubTitle>
                    나의 프로젝트 한눈에 보이도록 정리할 순 없을까?
                    <br />
                    분야별/지역별로 스터디를 모임을 만들 순 없을까?
                    <br />
                    <br /> HBD가 도와드리겠습니다!.
                  </SubTitle>
                </section>
                <Link to="Login">
                  <Button variant="dark" type="button">
                    로그인
                  </Button>
                </Link>
                <Link to="SignUp">
                  <Button variant="dark" type="button" style={screenButton}>
                    회원 가입
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default mainScreen;
