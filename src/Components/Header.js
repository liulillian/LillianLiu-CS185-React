//Header.js
import React, {Component} from 'react';

export class Header extends Component {
  render() {
    if (this.props.activeTabId == 1) {
      return (
        <div className="title">Lillian Liu's Portfolio</div>
      );
    } else { return null; }
  }
}

export default Header;
