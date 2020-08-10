import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import BoardView from "../board/boardView";

class myProfile extends React.Component {
  render() {
    const myProfileStyle = {
      margin: "30px",
    };

    const profileImageStyle = {
      width: "100%",
      hegiht: "100%",
      margin: "auto",
    };
    const profileButtonStyle = {
      marginTop: "30px",
    };
    const MenuStyle = {
      marginTop: "20px",
    };
    const secondColstyle = {};
    const firstColstyle = {
      textAlign: "center",
    };
    const profileT = {
      fontSize: "38px",
    };
    const profileP = {
      color: "grey",
    };

    return (
      <div style={myProfileStyle}>
        <Form>
          <Row>
            <Col md={3} style={firstColstyle}>
              <section>My Profile</section>
              <div className="profileMenu" style={MenuStyle}>
                <center>
                  <img
                    c
                    src="testImage.JPG"
                    alt="profile"
                    style={profileImageStyle}
                    block
                  />
                </center>
              </div>
              <div style={profileButtonStyle}>
                <Button variant="dark" type="button" block="true">
                  프로젝트 올리기
                </Button>
                <Button variant="dark" type="button" block="true">
                  프로젝트 삭제
                </Button>
              </div>
              <div>관심분야</div>
            </Col>
            <Col md={7} style={secondColstyle}>
              <div style={profileT}>
                나의 프로젝트
                <Button type="button" variant="dark">
                  프로젝트 업로드
                </Button>
              </div>
              <div style={profileP}>
                나의 프로젝트를 업로드하여 포트폴리오를 만들어보세요.
              </div>
              <div className="projectCard">
                <BoardView
                  title="Project_Card_Test"
                  year="Written_time"
                  detail="프로젝트 카드 테스트모델입니다."
                />
                <BoardView
                  title="Project_Card_Test"
                  year="Written_time"
                  detail="프로젝트 카드 테스트모델입니다."
                />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default myProfile;
