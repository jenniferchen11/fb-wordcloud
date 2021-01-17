import logo from './logo.png';
import './App.css';
import './index.css';
import TextInput from './components/TextInput';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entry: ''
    };
  }

  //Functions

  handleChange(val){
    let entry = this.state.entry;
    entry = val;
    this.setState({entry});
  }
  handleSubmit(){
    alert('sending request to Facebook API ' + this.state.entry)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src = {logo} className = "App-logo" alt="logo"/>
          <p className = 'welcome'>
            Welcome to FB.GenerateCloud!
          </p>
          <p className ='desc'>
            Using FaceBook API and machine learning algorithms, we will produce a personalized word cloud for you based on your FaceBook activity!
          </p>
          <p className ='desc'>
            Enter the link to your Facebook profile: 
          </p>
          <div>
            <TextInput 
              handleChange = {(val) => this.handleChange(val)}
              handleSubmit = {() => this.handleSubmit()}
            />
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

