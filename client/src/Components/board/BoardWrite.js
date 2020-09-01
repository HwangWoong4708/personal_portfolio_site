import React from "react";
import { Form, Button } from "react-bootstrap";
import "./BoardWrite.css";
import CKEditor from "ckeditor4-react";
import axios from "axios";

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

class BoardWrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writeTitle: "",
      writeEnv: "",
      writeUpload: "",
      writeDetail: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onProjectsubmit = this.onProjectsubmit.bind(this);
    console.log(this.state);
  }

  onValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEditorChange = e => {
    this.setState({
      writeDetail: e.editor.getData(),
    });
  };

  onProjectsubmit = e => {
    e.preventDefault();
    const result = {
      writeTitle: this.state.writeTitle,
      writeEnv: this.state.writeEnv,
      writeUpload: this.state.writeUpload,
      writeDetail: this.state.writeDetail,
    };
    console.log(result);
    this.setState(result);
    axios
      .post("/board/write", result)
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.href = "#/myProfile";
        } else {
          alert("글쓰기 실패");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const props = this.state;

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
                    value={props.writeTitle}
                    onChange={this.onValueChange}
                    placeholder="프로젝트 제목을 입력해주세요."
                  />

                  <Form.Control
                    name="writeEnv"
                    type="text"
                    maxLength="100"
                    value={props.writeEnv}
                    onChange={this.onValueChange}
                    placeholder="프로젝트 개발 환경을 입력해주세요."
                  />
                  <Form.Control
                    name="writeUpload"
                    type="text"
                    maxLength="100"
                    value={props.writeUpload}
                    onChange={this.onValueChange}
                    placeholder="해당 프로젝트 파일의 업로드 주소를 입력해주세요. ex) Github"
                  />
                  <CKEditor
                    data={props.writeDetail}
                    onChange={this.onEditorChange}
                  ></CKEditor>
                  <Button variant="dark" onClick={this.onProjectsubmit} block>
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
