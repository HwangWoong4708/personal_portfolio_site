import React from "react";
import AppBar from "./Components/Layouts/AppBar";
import { Route } from "react-router-dom";
import MainScreen from "./Components/Layouts/MainScreen";
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";
import Footer from "./Components/Layouts/Footer";
import MyProfile from "./Components/Layouts/MyProfile";
import Recruitment from "./Components/Layouts/Recruitment";
import BoardWrite from "./Components/board/BoardWrite";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Route exact path="/" component={MainScreen} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/MyProfile" component={MyProfile} />
        <Route path="/Recruitment" component={Recruitment} />
        <Route path="/Project_Write" component={BoardWrite} />
        <Footer />
      </div>
    );
  }
}
export default App;
