import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="main-header">
          <h1>Welcome to the HOA Manager!</h1>
          <p>Please log in to continue</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Header;
