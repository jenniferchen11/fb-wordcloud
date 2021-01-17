import React from "react";
import { FacebookProvider, Login } from "react-facebook";

export default class LoginBtn extends React.Component {
  handleResponse = (data) => {
    console.log(data);
    const {
      profile: { id },
      tokenDetail: { accessToken },
    } = data;
    fetch(`https://graph.facebook.com/${id}/posts?access_token=${accessToken}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  handleError = (error) => {
    this.setState({ error });
  };

  render() {
    return (
      <FacebookProvider appId="171027351023044">
        <Login
          scope="user_posts"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
            <div>
              <button className="login-btn" onClick={handleClick}>
                Login via Facebook
              </button>
              <div className="space"></div>
              {loading && <span>Loading...</span>}
            </div>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}
