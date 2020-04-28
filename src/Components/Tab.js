//Tab.js
import React, {Component} from 'react';

export class Tab extends Component {
  markActiveTab = () => {
    console.log("triggered");
    if (this.props.tabInfo.id == this.props.activeTabId) {
      return {
        cursor: 'pointer',
        backgroundColor: 'rgba(211,229,220,1)',
        fontWeight: 'bold'
      }
    } else {
      return {
        cursor: 'pointer',
        backgroundColor: 'rgba(0,0,0,0)'
      }
    }
  }
  
  highlightTab = (event) => {
    event.target.style.backgroundColor = 'rgba(226,245,228,1)';
  }
  unHighlightTab = (event) => {
    if (this.props.tabInfo.id == this.props.activeTabId) {
      event.target.style.backgroundColor = 'rgba(211,229,220,1)';
    } else {
      event.target.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
  
  render() {
    return (
      <div
        className='tab'
        style={this.markActiveTab()}
        onMouseOver={(event) => this.highlightTab(event)}
        onMouseOut={(event) => this.unHighlightTab(event)}
        onClick={this.props.changeTab.bind(this, this.props.tabInfo.id)}
      >
        {this.props.tabInfo.title}
      </div>
    );
  }
}

export default Tab;
