import React from "react";
import AppBar from "./Components/Layouts/AppBar";
import { Route } from "react-router-dom";
import mainScreen from "./Components/Layouts/mainScreen";
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";
import Footer from "./Components/Layouts/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Route exact path="/" component={mainScreen} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Footer />
      </div>
    );
  }
}
export default App;