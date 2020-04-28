//Home.js
import React, {Component} from 'react';

export class Home extends Component {
  render() {
    return (
      <div className='Home'>
        
        <div className="body-block" id="intro">
          <div className="block-content"><img className="image" src={require("./images/BG_tp.jpg")} alt="A market aisle stocked with toilet paper." /></div>
          <div className="block-content text-section">
            <div className="section-title"><h2>Welcome to my portfolio website</h2></div>
            <div>
              <p>made for University of California - Santa Barbara, CMPSC 185, spring 2020. This site may not be much for now, but will continue to be developed over the next few weeks.</p>
              <p>Feel free to explore the different pages. The Gallery contains photos of me, along with some of my artwork. The Videos page contains Youtube videos that I enjoy. You can learn more about me in the About Me page, or access my social media and external links in the Links page.</p>
            </div>
          </div>
        </div>
        
        <div className="body-block" id="whats-new">
          <div className="block-content">
            <div className="section-title">
              <div><h2>What's New</h2></div>
              <div><p><i>Sunday April 26, 2020</i></p></div>
            </div>
            <div>
              <p>The entire site has been rebuilt using ReactJS. Enjoy the smoother tab transitions!</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Home;
