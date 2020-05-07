//GuestBook.js
import React, {Component, useState, useEffect} from 'react';
import config from '../config.js';
const firebase = require('firebase');

export function GuestBook (props) {
  const [testdata, setTestdata] = useState("nothing yet");
  const [firebaseArray, setFirebaseArray] = useState("nothing yet");
  const [shouldRender, setShouldRender] = useState(true);
  
  const sampleArray = ['hi','hello','how are you'];

  useEffect(() => {
    if (!firebase.apps.length) {
     firebase.initializeApp(config)
    }
    
    //get a reference to the database
    let ref1 = firebase.database().ref('testdata')
    let ref2 = firebase.database().ref('firebaseArray')
    //retrieve its data
    ref1.on('value', snapshot => {
      const state = snapshot.val()
      setTestdata(state)
    })
    ref2.on('value', snapshot => {
      const state = snapshot.val()
      setFirebaseArray(state)
    })
  }, [shouldRender])
  
  return (
    <div id='GuestBook'>
      <div className="body-block">
        <div className="block-content">
          <div><p>Send a private message to the website administrator(s), or post a public message saying hi!</p></div>
        </div>
      </div>
      
      <div id="main-guestbook">
        <div className="body-block"><div className="block-content" id="GuestBookForm">
          <div><h2>Write a Message!</h2></div>
          <form>
            *<input type="text" name="username" placeholder="Name" /><br/>
            <input type="text" name="description" placeholder="Describe yourself..." /><br/>
            *<input type="text" name="message" placeholder="Message..." /><br/>
            Make this message public?<input type="checkbox" name="public" /><br/>
            <input type="text" name="email" placeholder="Email" /><br/>
            <button>Publish</button>
          </form>
        </div></div>
          
        <div className="body-block"><div className="block-content" id="GuestBookHistory">
          <div><h2>Published Messages:</h2></div>
          <div className="elem">
            <ul>
            
            </ul>
          </div>
        </div></div>
      </div>
      
    </div>
  );
}

export default GuestBook;
