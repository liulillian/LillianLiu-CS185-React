//AboutMe.js
import React, {Component} from 'react';

export class AboutMe extends Component {
  render() {
    return (
      <div className='AboutMe'>
        
        <div class="body-block" id="main-about-me">
          <div class="block-content text-section">
            <div><h2>About Me</h2></div>
            <div>
              <p>As of April 2020, I am a fourth-year undergraduate Computer Engineering major at the University of California - Santa Barbara.</p>
              <p>I'm from Alhambra, Los Angeles County, and grew up in a calm neighborhood. I attended Martha Baldwin Elementary School and San Gabriel High School, then moved to Santa Barbara for a few years to attend UCSB before moving back home.</p>
              <p>I love learning new things, and dabble in a lot of different topics; even after graduation, I plan to keep learning as I work, and possibly return to school for a Master's degree one day, if I can afford it.</p>
              <p>The most important thing to me is respect; when people respect one another, other good things follow. People can collaborate, or at least not get in each other's way, and people can learn from one another.</p>
            </div>
          </div>
          <div class="block-content"><img class="image" src={require("./images/photo0.jpg")} alt="A portrait photo."/></div>
        </div>
        
        <div class="body-block" id="hobbies">
          <div class="block-content">
            <div><h2>Hobbies</h2></div>
            <div>
              <p>I've tried and enjoyed many different hobbies, though I haven't had time to master any one of them. I play the piano casually, draw both traditionally and digitally, and have made video games. I also love watching cartoons and anime.</p>
              <p>You can see some of my artwork in the Gallery page, and some of the cartoons I like in the Videos page.</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default AboutMe;
