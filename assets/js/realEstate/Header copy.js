import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <nav>
          <a href="#">Create ads</a>
          <a href="#">About Us</a>
          <a href="#">Login</a>
          <a href="#" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
