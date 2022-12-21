import React, { Component } from "react";
import "../css/CheckActive.css";

let userIsActive;
let lastActiveTimestamp;
let timeout;

export class CheckActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  componentDidMount = () => {
    timeout = 30000;
    lastActiveTimestamp = 0;
    userIsActive = false;

    window.addEventListener("mousemove", this.active);
    window.addEventListener("keypress", this.active);
    window.addEventListener("click", this.active);

    setInterval(this.checkUserIsActive, 1000);
    this.active();
  };

  checkUserIsActive = () => {
    if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout) {
      console.log("user is not active");
      userIsActive = false;
      this.setState({ active: userIsActive });
    }
  };

  active = () => {
    lastActiveTimestamp = new Date().getTime();
    if (!userIsActive) {
      userIsActive = true;
      console.log("user is active");
      this.setState({ active: userIsActive });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.active);
    window.removeEventListener("keypress", this.active);
    window.removeEventListener("click", this.active);
  }

  render() {
    if (this.state.active) {
      return this.props.children;
    } else {
      return (
        <div className="checkActive">
          <h2>if you are still here, make any mouse movement</h2>
        </div>
      );
    }
  }
}

export default CheckActive;
