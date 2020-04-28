//Images.js
import React, {Component} from 'react';
import {SRLWrapper} from 'simple-react-lightbox'

export class Gallery extends Component {
  render() {
    return (
      <div className='Gallery'>
        
        <SRLWrapper>
          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>Photos</h2></div>
              <div className="image-grid" id="photos">
                <img className="image horiz" id="photo5.jpg" src={require("./images/photo5.jpg")} alt="A group photo from a hackathon."/>
                <img className="image horiz" id="photo4.jpg" src={require("./images/photo4.jpg")} alt="A photo of a UCSB Reads table for an event."/>
                <img className="image horiz" id="photo3.jpg" src={require("./images/photo3.jpg")} alt="A photo of students serving curry at a food festival."/>
                <img className="image vert" id="photo1.jpg" src={require("./images/photo1.jpg")} alt="A photo with a giant bag of Calbee shrimp chips."/>
                <img className="image square" id="photo7.jpg" src={require("./images/photo7.jpg")} alt="A family photo at Dolby Theatre."/>
                <img className="image vert" id="photo2.jpg" src={require("./images/photo2.jpg")} alt="A screenshot of the Google Arts & Culture mobile app."/>
                <img className="image square" id="photo6.jpg" src={require("./images/photo6.jpg")} alt="A group photo of students at UCSB."/>
              </div>
            </div>
          </div>
          
          <div className="body-block">
            <div className="block-content">
              <div className="section-title"><h2>Artwork</h2></div>
              <div className="image-grid" id="artwork">
                <img className="image" id="art1.png" src={require("./images/art1.png")} alt="An Arcanine sticker design."/>
                <img className="image" id="art2.png" src={require("./images/art2.png")} alt="A moon rabbit sticker design."/>
                <img className="image" id="art3.png" src={require("./images/art3.png")} alt="A Toxel-themed rug design."/>
                <img className="image" id="art4.gif" src={require("./images/art4.gif")} alt="A gif from Pursuivant, a game."/>
              </div>
            </div>
          </div>
        </SRLWrapper>
        
      </div>
    );
  }
}

export default Gallery;
