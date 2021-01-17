import React from "react";

export default class Login extends React.Component {
  getPosts() {
    window.FB.api("/me/posts", function (response) {
        console.log("API response", response);
        var list = document.getElementById("userLikes");
        for (var i = 0; i < response.data.length; i++) {
          var li = document.createElement("li");
          li.innerHTML = response.data[i].message;
          list.appendChild(li);
        }
      });
  }
  Login() {
    window.FB.login(
        function (response) {
          console.log("FB.login response", response);
          this.getPosts();
        },
        { scope: "user_posts" }
      );
      return false;
  }
  render() {
    return (
      <button id="login-btn" className="login-btn" onSubmit={this.Login()}>
        Login
      </button>
    );
  }
}
