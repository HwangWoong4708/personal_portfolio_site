import React from "react";
import { Button } from "react-bootstrap";
import BoardView from "../board/BoardView";
import { Link } from "react-router-dom";
import "./MyProfile.css";

class MyProfile extends React.Component {
  render() {
    const firstColStyle = {
      margin: "30px",
    };
    const maintitleStyle = {
      fontSize: "30px",
      textAlign: "center",
      marginTop: "5px",
    };

    const profileImageStyle = {
      width: "100%",
      hegiht: "100%",
      margin: "auto",
    };
    const profileButtonStyle = {
      marginTop: "30px",
      marginBottom: "20px",
    };
    const MenuStyle = {
      marginTop: "20px",
    };
    const profileTitle = {
      fontSize: "38px",
    };
    const profilePragraph = {
      color: "grey",
    };
    const lefttabButtonStyle = {
      marginBottom: "5px",
    };

    return (
      <div id="grid">
        <div className="firstcol" style={firstColStyle}>
          <section style={maintitleStyle}>My Profile</section>
          <div className="profileMenu" style={MenuStyle}>
            <center>
              <img
                src="testImage.JPG"
                alt="profile"
                style={profileImageStyle}
              />
            </center>
            <div style={profileButtonStyle}>
              <Button
                variant="dark"
                type="button"
                block="true"
                style={lefttabButtonStyle}
              >
                프로필 이미지/관심분야 수정
              </Button>
              <Link to="Project_Write">
                <Button
                  variant="dark"
                  type="button"
                  block="true"
                  style={lefttabButtonStyle}
                >
                  프로젝트 업로드
                </Button>
              </Link>
              <Button
                variant="dark"
                type="button"
                block="true"
                style={lefttabButtonStyle}
              >
                프로젝트 관리
              </Button>
            </div>
            <div>관심분야</div>
          </div>
        </div>
        <div className="secondCol">
          <div style={profileTitle}>
            나의 프로젝트
            <Link to="Project_Write">
              <Button type="button" variant="dark">
                프로젝트 업로드
              </Button>
            </Link>
          </div>
          <div style={profilePragraph}>
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
        </div>
      </div>
    );
  }
}

export default MyProfile;
