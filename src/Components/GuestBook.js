//GuestBook.js
// Followed tutorial from https://css-tricks.com/intro-firebase-react/ as a base
import React, {useState, useEffect} from 'react';
import config from '../config.js';
const firebase = require('firebase');

export function GuestBook (props) {
  const [testdata, setTestdata] = useState("nothing yet");
  const [shouldRender, setShouldRender] = useState(true);
  const [publicPosts, setPublicPosts] = useState([]);
  const [formState, setFormState] = useState({
    publicpost: false,
    username: "",
    description: "",
    message: "",
    email: "",
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });
  
  useEffect(() => {
    if (!firebase.apps.length) {
     firebase.initializeApp(config);
    }
    //test value
    let testref = firebase.database().ref("testdata");
    testref.on("value", (snapshot) => {
      const state = snapshot.val();
      setTestdata(state);
    });
    //list of public posts
    let publicRef = firebase.database().ref("publicPosts");
    publicRef.on("value", (snapshot) => {
      let snapshotPublicPosts = snapshot.val();
      let arrPublicPosts = [];
      
      for (let publicPostID in snapshotPublicPosts) {
        arrPublicPosts.push({
          username: snapshotPublicPosts[publicPostID].username,
          description: snapshotPublicPosts[publicPostID].description,
          message: snapshotPublicPosts[publicPostID].message,
          timestamp: snapshotPublicPosts[publicPostID].timestamp
        });
      }
      setPublicPosts(arrPublicPosts);
    });
  }, [shouldRender])
  
  const handleChangeCheckbox = (event) => {
    let tempFormState = formState;
    tempFormState[event.target.name] = event.target.checked;
    setFormState(tempFormState);
    //console.log(formState);
  }
  const handleChange = (event) => {
    let tempFormState = formState;
    tempFormState[event.target.name] = event.target.value;
    setFormState(tempFormState);
    //console.log(formState);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formState["publicpost"]) {
      const publicRef = firebase.database().ref("publicPosts");
      publicRef.push(formState);
      alert("Your message has been posted!")
    } else {
      const privateRef = firebase.database().ref("privatePosts");
      privateRef.push(formState);
      alert("Your message has been sent to the website administrator!");
    }
    document.getElementById("actualForm").reset();
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
          <form id="actualForm" onSubmit={(event) => handleSubmit(event)}>
            <label for="publicpost">Make this message public?</label>
            <input type="checkbox"
              name="publicpost"
              onChange={(event) => handleChangeCheckbox(event)}
            /><br/>
            <label for="username">*</label>
            <input type="text"
              name="username"
              placeholder="Name... (min 6, max 19 characters)"
              minLength="6"
              maxLength="19"
              required
              onChange={(event) => handleChange(event)}
            /><br/>
            <input type="text"
              name="description"
              placeholder="Describe yourself... (max 99 characters)"
              maxLength="99"
              onChange={(event) => handleChange(event)}
            /><br/>
            <label for="message">*</label>
            <textarea
              name="message"
              placeholder="Message... (min 16, max 499 characters)"
              rows="3"
              minLength="16"
              maxLength="499"
              required
              onChange={(event) => handleChange(event)}
            /><br/>
            <input type="text"
              name="email"
              placeholder="Email (not published)"
              onChange={(event) => handleChange(event)}
            /><br/>
            <input type="submit" value="Publish" />
          </form>
        </div></div>
          
        <div className="body-block" id="GuestBookHistory"><div className="block-content">
          <div><h2>Published Messages:</h2></div>
          <div className="elem">
            <ul id="publicPostList">
              {publicPosts.map((publicPost) => { // <-----------------  MAP FUNCTION IS HERE!!!!!
                let timeDisplay = new Intl.DateTimeFormat('en-US', {year:'numeric', month:'2-digit', day:'2-digit', hour:'numeric', minute:'2-digit'}).format(publicPost.timestamp);
                return (
                  <li key={publicPost.id}>
                    <h4>{publicPost.username} <span class="subtitle">{timeDisplay}</span></h4>
                    <p class="description">{publicPost.description}</p>
                    <p class="message">{publicPost.message}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div></div>
      </div>
      
    </div>
  );
}

export default GuestBook;
