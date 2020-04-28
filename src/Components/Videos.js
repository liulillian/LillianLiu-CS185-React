//Videos.js
import React, {Component} from 'react';

export class Videos extends Component {
  render() {
    return(
      <div className='Videos'>
      
        <div className="body-block">
          <div className="block-content">
            <div><p>I don't have any personal videos for the public, but here are some public videos I like.</p></div>
          </div>
        </div>
        
        <div className="video-grid">
          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>"Invisible" from Klaus</h2></div>
              <div className="video"><iframe width="500" height="315" src="https://www.youtube.com/embed/PNsmvW6r-hg" allowfullscreen></iframe></div>
            </div>
          </div>

          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>"The End" from Gravity Falls</h2></div>
              <div className="video"><iframe width="500" height="315" src="https://www.youtube.com/embed/b3RSyC5EVEo" allowfullscreen></iframe></div>
            </div>
          </div>

          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>"Pokémon Square" from Pokémon</h2></div>
              <div className="video"><iframe width="500" height="315" src="https://www.youtube.com/embed/h7KLbnwn6Fs" allowfullscreen></iframe></div>
            </div>
          </div>
      
          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>"Crying for Rain" by Minami</h2></div>
              <div className="video"><iframe width="500" height="315" src="https://www.youtube.com/embed/0YF8vecQWYs" allowfullscreen></iframe></div>
            </div>
          </div>

          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>"Crossing the Line" from Tangled</h2></div>
              <div className="video"><iframe width="500" height="315" src="https://www.youtube.com/embed/iaHBg8E1o00" allowfullscreen></iframe></div>
            </div>
          </div>

          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>"Opening Theme" from PL vs AA</h2></div>
              <div className="video"><iframe width="500" height="315" src="https://www.youtube.com/embed/GdgsNe_e4gA" allowfullscreen></iframe></div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Videos;
