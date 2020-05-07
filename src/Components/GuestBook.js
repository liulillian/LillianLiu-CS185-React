//GuestBook.js
import React, {Component, useState, useEffect} from 'react';
import config from '../config.js';
const firebase = require('firebase');

export function GuestBook (props) {
  const [testdata, setTestdata] = useState("nothing yet");
  const [publicpost, setPublicpost] = useState(false);
  const [username, setUsername] = useState("nothing yet");
  const [description, setDescription] = useState("nothing yet");
  const [message, setMessage] = useState("nothing yet");
  const [email, setEmail] = useState("nothing yet");
  
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
      setTestdata(state)
    })
  }, [shouldRender])
  
  const handleSubmit = (tabId) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
  
  return (
    <div id='GuestBook'>
      <div className="body-block">
        <div className="block-content">
          <div><p>Send a private message to the website administrator(s), or post a public message saying hi!</p></div>
        </div>
      </div>
      
      <div id="main-guestbook">
        <div className="body-block" id="GuestBookForm"><div className="block-content">
          <div><h2>Write a Message!</h2></div>
          <form onSubmit={handleSubmit}> {/*Still reloads the page on submit, sadly*/}
            <label for="publicpost">Make this message public?</label>
            <input type="checkbox" name="publicpost" /><br/>
            <label for="username">*</label>
            <input type="text"
              name="username"
              placeholder="Name... (min 5, max 20 characters)"
              minlength="5"
              maxlength="20"
              required
            /><br/>
            <input type="text"
              name="description"
              placeholder="Describe yourself... (max 100 characters)"
              maxlength="100"
            /><br/>
            <label for="message">*</label>
            <textarea
              name="message"
              placeholder="Message... (min 15, max 500 characters)"
              rows="3"
              minlength="15"
              maxlength="500"
              required
            /><br/>
            <input type="text" name="email" placeholder="Email (not published)" /><br/>
            <input type="submit" value="Publish" />
          </form>
        </div></div>
          
        <div className="body-block" id="GuestBookHistory"><div className="block-content">
          <div><h2>Published Messages:</h2></div>
          <div className="elem">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div></div>
      </div>
      
    </div>
  );
}

export default GuestBook;
