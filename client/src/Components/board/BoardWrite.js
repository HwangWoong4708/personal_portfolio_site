import React from "react";
import { Form, Button } from "react-bootstrap";
import "./BoardWrite.css";
import CKEditor from "ckeditor4-react";
import { post } from "axios";

class BoardWrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writeTitle: "",
      writeEnv: "",
      writeAddress: "",
      writeDetail: "",
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  onEditorChange = e => {
    this.setState({
      writeDetail: e.editor.getData(),
    });
  };

  handleProjectsubmit = e => {
    e.preventDefault();
    this.addProject().then(response => {
      console.log(response.data);
    });
    this.setState = {
      writeTitle: "",
      writeEnv: "",
      writeAddress: "",
      writeDetail: "",
    };
  };

  //프로젝트 업로드
  addProject = () => {
    const url = "http://localhost:8080/board/write";
    const formData = new FormData();
    formData.append("writeTitle", this.state.writeTitle);
    formData.append("writeEnv", this.state.writeEnv);
    formData.append("writeAddress", this.state.writeAddress);
    formData.append("writeDetail", this.state.writeDetail);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };
  render() {
    const writeTitleStyle = {
      marginTop: "20px",
      marginLeft: "20px",
      fontSize: "30px",
      fontWeight: 600,
    };
    const introPragraphStyle = {
      color: "grey",
      marginLeft: "20px",
      marginTop: "10px",
    };
    const horizonLineStyle = {
      border: "solid 1px grey",
      align: "bottom",
    };

    const sectionTitleStyle = {
      fontSize: "20px",
    };

    return (
      <div id="grid">
        <div className="firstCol">
          <img src="mainImage.jpg" alt="profile"></img>
        </div>
        <div className="secondCol">
          <div className="uploadTitle" style={writeTitleStyle}>
            프로젝트 업로드 <Button variant="dark">썸네일 이미지 선택</Button>
          </div>
          <div style={introPragraphStyle}>
            나의 프로젝트를 업로드하여 포트폴리오를 만들어보세요. 대표 이미지를
            선택하시면 프로젝트 카드에 출력됩니다.
          </div>
          <hr style={horizonLineStyle} />
          <section className="boardwriteSection">
            <Form>
              <Form.Group className="loginInput">
                <Form.Label style={sectionTitleStyle}>
                  프로젝트카드 작성
                </Form.Label>

                <Form.Group className="writeProjectcard">
                  <Form.Control
                    name="writeTitle"
                    type="text"
                    maxLength="100"
                    value={this.state.writeTitle}
                    onChange={this.handleValueChange}
                    placeholder="프로젝트 제목을 입력해주세요."
                  />

                  <Form.Control
                    name="writeEnv"
                    type="text"
                    maxLength="100"
                    value={this.state.writeEnv}
                    onChange={this.handleValueChange}
                    placeholder="프로젝트 개발 환경을 입력해주세요."
                  />
                  <Form.Control
                    name="writeAddress"
                    type="text"
                    maxLength="100"
                    value={this.state.writeAddress}
                    onChange={this.handleValueChange}
                    placeholder="해당 프로젝트 파일의 업로드 주소를 입력해주세요. ex) Github"
                  />
                  <CKEditor
                    data={this.state.writeDetail}
                    onChange={this.onEditorChange}
                  ></CKEditor>
                  <Button
                    variant="dark"
                    onClick={this.handleProjectsubmit}
                    block
                  >
                    작성 완료
                  </Button>
                </Form.Group>
              </Form.Group>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}

export default BoardWrite;
