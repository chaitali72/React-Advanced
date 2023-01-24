import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: " ",
      },
    };
  }

  //   async componentDidMount() {
  //     const data = await fetch("https://api.github.com/users/chaitali72");
  //     const json = await data.json();
  //     console.log(json);
  //     this.setState({
  //       userInfo: json,
  //     });
  //     //api calls
  //     // this method itself is a async
  //   }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("react mounting");
    }, 1000);
  }
  componentDidUpdate() {
    // upadte the dom with userinfo
    //you want to compare the prev state  with current count
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //destroy called or clean up effect done inside the method
  }
  render() {
    return (
      <div className="github-users">
        <h1>Name:{this.state.userInfo.name} </h1>
        <h2>Location: {this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
      </div>
    );
  }
}
export default About;
