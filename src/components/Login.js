import React from "react";
import { FacebookProvider, Login } from "react-facebook";
import ReactWordcloud from "react-wordcloud";

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};

export default class LoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGen: true,
    words: [] };
  }
  handleResponse = (data) => {
    console.log(data);
    const {
      profile: { id },
      tokenDetail: { accessToken },
    } = data;
    fetch(`https://graph.facebook.com/${id}/posts?access_token=${accessToken}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let hashTags = [];
        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].message) {
            const msgHashes = data.data[i].message.match(/([a-z\d-]+)/gi);
            if (msgHashes) {
              hashTags = hashTags.concat(msgHashes);
            }
          }
        }
        for (let i = 0; i < hashTags.length; i++) {
          this.state.words.push({text: hashTags[i].replace('#', ''), value: 10 + i})
        }
        this.setState({showGen: true});
      });
  };

  render() {
    return (
      <FacebookProvider appId="171027351023044">
        <Login
          scope="user_posts"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ handleClick }) => (
            <div>
              <button className="login-btn" onClick={handleClick}>
                Generate
              </button>
            </div>
          )}
        </Login>
        {this.state.showGen && (
          <ReactWordcloud options={options} words={this.state.words} />
        )}
      </FacebookProvider>
    );
  }
}
