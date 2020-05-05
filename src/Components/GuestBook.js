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
    <div className='GuestBook'>
      
      <div class="body-block" id="main-extlinks">
        <div class="block-content">
          <div><h2>Social Media</h2></div>
          <div class="elem"><h3>{testdata}</h3></div> <br/>
        </div>
        <div class="block-content">
          <div><h2>External Links</h2></div>
          <div class="elem">
            {sampleArray.map((s,index) => (
              <p>
                Displaying...<br/>
                {s}
              </p>
            ))}
          </div>
        </div>
        <div class="block-content">
          <div><h2>Mapping JSON?</h2></div>
          <div class="elem">Still TODO</div>
        </div>
      </div>
        
    </div>
  );
}

export default GuestBook;
