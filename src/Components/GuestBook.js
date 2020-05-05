//GuestBook.js
import React, {Component, useState, useEffect} from 'react';
import config from '../config.js';
const firebase = require('firebase');

export function GuestBook (props) {
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
      const state = snapshot.val()
      setTestdata(state)
    })
  }, [shouldRender])
  
  return (
    <div className='GuestBook'>
      
      <div class="body-block" id="main-extlinks">
        <div class="block-content">
          <div><h2>Social Media</h2></div>
          <div class="elem"><h3>{testdata}</h3></div> <br/>
        </div>
        <div class="block-content">
          <div><h2>External Links</h2></div>
          <div class="elem"><h3>{testdata}</h3></div> <br/>
        </div>
      </div>
        
    </div>
  );
}

export default GuestBook;
