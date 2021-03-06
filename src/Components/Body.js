//Body.js
import React, {Component} from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Videos from './Videos';
import AboutMe from './AboutMe';
import Links from './Links';
import Movies from './Movies';
import GuestBook from './GuestBook';

export class Body extends Component {
  displayContent = () => {
    var activeTabId = this.props.activeTabId;
    if (activeTabId == 1) return <Home/>;
    else if (activeTabId == 2) return <Gallery/>;
    else if (activeTabId == 3) return <Videos/>;
    else if (activeTabId == 4) return <AboutMe/>;
    else if (activeTabId == 5) return <Links/>;
    else if (activeTabId == 6) return <Movies/>;
    else if (activeTabId == 7) return <GuestBook/>;
    else return <Home/>;
  }
  
  render() {
    return (this.displayContent());
  }
}

export default Body;
