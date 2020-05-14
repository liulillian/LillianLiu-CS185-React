//App.js
import React, {useState} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';
import Header from './Components/Header';
import TabList from './Components/TabList';
import Body from './Components/Body';

//export class App extends Component {
export function App (props) {
  const [activeTabId, setActiveTabId] = useState(1);
  
  const changeTab = (tabId) => {
    setActiveTabId(tabId);
  }
  
  const tabs = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'Gallery'},
    {id: 3, title: 'Videos'},
    {id: 4, title: 'About Me'},
    {id: 5, title: 'Links'},
    {id: 6, title: 'Movies'},
    {id: 7, title: 'Guest Book'}
  ]
  
  return (
    <div className="body">
      <SimpleReactLightbox>
        <div className="header">
          <Header className="header" activeTabId={activeTabId} />
        </div>
        <div className="nav-bar">
          <img
            className="elem image"
            src={require("./Components/images/lilysprite.png")}
            alt="Pixel lily and lily pad logo."
            onClick={() => changeTab(1)}
            style={{cursor:'pointer'}}
          />
          <TabList
            tabs={tabs}
            changeTab={changeTab}
            activeTabId={activeTabId}
          />
        </div>
        <div className="main-body">
          <Body activeTabId={activeTabId} />
        </div>
      </SimpleReactLightbox>
      
      <ScrollUpButton/>
    </div>
  );
}

export default App;
