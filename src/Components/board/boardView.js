import React from "react";
import "./boardView.css";
class BoardView extends React.Component {
  render() {
    return (
      <div className="project">
        <img src="favicon.ico" alt="profile" />
        <div className="project__data">
          <h3 className="project__title">{this.props.title}</h3>
          <h5 className="project__year">{this.props.year}</h5>
          <p className="project__detail">
            {this.props.detail.slice(0, 180)}...
          </p>
        </div>
      </div>
    );
  }
}

export default BoardView;
