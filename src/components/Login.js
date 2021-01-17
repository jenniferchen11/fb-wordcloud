import React from "react";
import { FacebookProvider, Login } from 'react-facebook';

export default class LoginBtn extends React.Component {
  handleResponse = (data) => {
    console.log(data);
    const {profile: {id}, tokenDetail: {accessToken} } = data;
    alert(`${id} : ${accessToken}`);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="171027351023044">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
            <span className="login-btn" onClick={handleClick}>
              Login via Facebook
              {loading && (
                <span>Loading...</span>
              )}
            </span>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}
