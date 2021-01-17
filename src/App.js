import logo from './logo.png';
import './App.css';
import './index.css';
import LoginBtn from './components/Login';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //Functions
  handleSubmit(){
    alert('sending request to Facebook API ' + this.state.entry)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src = {logo} className = "App-logo" alt="logo"/>
          <p className = 'welcome'>
            Welcome to FB.Classify!
          </p>
          <p className ='desc'>
            Using machine learning algorithms to determine your personality type!
          </p>
          <p className ='desc'>
            Login Below: 
          </p>
          <div>
            <LoginBtn/>
          </div>
          <div className = 'results'>
            *Results will appear here*
          </div>
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

function appRender () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
appRender()
export default App;

