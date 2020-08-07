import React from "react";
import { Navbar } from "react-bootstrap";

class AppBar extends React.Component {
  render() {
    const appbarStyle = {
      width: "100%",
      minWidth: 1080,
    };
    return (
      <div className="bar" style={appbarStyle}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">HBD - How to Be a Developer</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default AppBar;
