//Movies.js
import React, {Component} from 'react';
import {SRLWrapper} from 'simple-react-lightbox'

export function Movies (props) {
  const axios = require('axios');
  const apikey = '88a94f6e';
  const movieList = [
    {id: 1, imdbid: 'tt4729430'}, //Klaus
    {id: 2, imdbid: 'tt9683478'}, //The Half of It
    {id: 3, imdbid: 'tt1075417'}, //Race to Witch Mountain
    {id: 4, imdbid: 'tt0245429'}, //Spirited Away
    {id: 5, imdbid: 'tt0092067'}, //Castle in the Sky
    {id: 6, imdbid: 'tt1772341'}, //Wreck-it Ralph
    {id: 7, imdbid: 'tt0398286'}, //Tangled
    {id: 8, imdbid: 'tt4520988'}  //Frozen 2
  ];
  
  async function getMovieData(apikey,imdbid) {
    const url = "http://www.omdbapi.com/?apikey="
      + apikey + "&i=" + imdbid;
    try {
      const response = await axios.get(url);
      console.log(response);
      console.log(response.data.Title);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className='Home'>
      
      <div className="body-block" id="intro">
        <div className="block-content"><img className="image" src={require("./images/BG_tp.jpg")} alt="A market aisle stocked with toilet paper." /></div>
        <div className="block-content text-section">
          <div className="section-title"><h2>Welcome to my portfolio website</h2></div>
          <div>
            <p>made for University of California - Santa Barbara, CMPSC 185, spring 2020. This site may not be much for now, but will continue to be developed over the next few weeks.</p>
            <p>Feel free to explore the different pages. The Gallery contains photos of me, along with some of my artwork. The Videos page contains Youtube videos that I enjoy. You can learn more about me in the About Me page, or access my social media and external links in the Links page.</p>
            <button onClick={() => getMovieData(apikey,'tt4729430')}>Click here</button>
          </div>
        </div>
      </div>
      
      <div className="body-block" id="whats-new">
        <div className="block-content">
          <div className="section-title">
            <div><h2>What's New <span class="subtitle">Thursday May 7, 2020</span></h2></div>
          </div>
          <div>
            <p>The Guest Book is now available. Drop by and send me a message, or say hi to everyone!</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Movies;