import logo from "./logo.png";
import "./App.css";
import "./index.css";
import LoginBtn from "./components/Login";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //Functions
  handleSubmit() {
    alert("sending request to Facebook API " + this.state.entry);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="welcome">Welcome to FB.GenerateCloud!</span>
          <span className="desc">
          Using FaceBook API and machine learning algorithms, we will produce a personalized word cloud for you based on your FaceBook activity!
          </span>
          <p className="space"></p>
          <div>
            <LoginBtn />
          </div>
          <div className="space"></div>
          <a
            className="App-link"
            href="https://github.com/yoyopyeah/Hack-the-North"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the source code on GitHub
          </a>
        </header>
      </div>
    );
  }
}

function appRender() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
appRender();
export default App;