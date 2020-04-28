//App.js
import React, {Component} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';
import Header from './Components/Header';
import TabList from './Components/TabList';
import Body from './Components/Body';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTabId: 1
    }
  }
  
  changeTab = (tabId) => {
    this.setState({
      activeTabId: tabId
    })
  }
  
  render() {
    const tabs = [
      {id: 1, title: 'Home'},
      {id: 2, title: 'Gallery'},
      {id: 3, title: 'Videos'},
      {id: 4, title: 'AboutMe'},
      {id: 5, title: 'Links'}
    ]
    return (
      <div className="body">
        <SimpleReactLightbox>
          <div className="header">
            <Header className="header" activeTabId={this.state.activeTabId} />
          </div>
          <div className="nav-bar">
            <img
              className="elem image"
              src={require("./Components/images/lilysprite.png")}
              alt="Pixel lily and lily pad logo."
              onClick={() => this.changeTab(1)}
              style={{cursor:'pointer'}}
            />
            <TabList
              tabs={tabs}
              changeTab={this.changeTab}
              activeTabId={this.state.activeTabId}
            />
          </div>
          <div className="main-body">
            <Body activeTabId={this.state.activeTabId} />
          </div>
        </SimpleReactLightbox>
        
        <ScrollUpButton/>
      </div>
    );
  }
}

export default App;
