//App.js
import React, {Component, useState, useEffect} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';
import config from './config.js';
import Header from './Components/Header';
import TabList from './Components/TabList';
import Body from './Components/Body';
const firebase = require('firebase');

//export class App extends Component {
export function App (props) {
  const [activeTabId, setActiveTabId] = useState(1);
  const [testdata, setTestdata] = useState("nothing yet");
  const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {
    if (!firebase.apps.length) {
     firebase.initializeApp(config)
    }
    
    //get a reference to the database
    let ref = firebase.database().ref('testdata')
    //retrieve its data
    ref.on('value', snapshot => {
      //this is your call back function
      //state will be a JSON object after this
      //set your apps state to contain this data however you like
      const state = snapshot.val()
      //since i use react 16, i set my state like this
      //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below calls
      setShouldRender(false)
      setTestdata(state)
    })
  }, [shouldRender])
  
  const changeTab = (tabId) => {
    setActiveTabId(tabId);
  }
  
  const tabs = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'Gallery'},
    {id: 3, title: 'Videos'},
    {id: 4, title: 'About Me'},
    {id: 5, title: 'Links'},
    {id: 6, title: 'Guest Book'}
  ]
  
  return (
    <div className="body">
      <SimpleReactLightbox>
        <div className="header">
          <Header className="header" activeTabId={activeTabId} />
        </div>
        <div className="nav-bar">
          <h1>{testdata}</h1>
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
