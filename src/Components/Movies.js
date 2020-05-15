//Movies.js
import React, {useState, useEffect} from 'react';
import {SRLWrapper} from 'simple-react-lightbox'

//for Simple React Lightbox
const options = {
  settings: {
    disableWheelControls: true, //this setting not working
    disableKeyboardControls: true
  }
}


export function Movies (props) {
  const axios = require('axios');
  const apikey = '88a94f6e';
  const movieArray = [
    {idx: 0, imdbid: 'tt4729430'}, //Klaus
    {idx: 1, imdbid: 'tt4633694'}, //Into the Spider-Verse
    {idx: 2, imdbid: 'tt1075417'}, //Race to Witch Mountain
    {idx: 3, imdbid: 'tt0245429'}, //Spirited Away
    {idx: 4, imdbid: 'tt0092067'}, //Castle in the Sky
    {idx: 5, imdbid: 'tt1772341'}, //Wreck-it Ralph
    {idx: 6, imdbid: 'tt0398286'}, //Tangled
    {idx: 7, imdbid: 'tt4520988'}  //Frozen 2
  ];
  const [fetchResults, setFetchResults] = useState([]);
  const [shouldRender, setShouldRender] = useState(true);
  const [renderTrigger, setRenderTrigger] = useState(0.0);
  
  useEffect(() => {
    for (let idx in movieArray) {
      getMovieData(apikey,movieArray[idx].imdbid);
    }
  }, [shouldRender])
  
  const reRender = () => {
    setRenderTrigger(Math.random());
    //console.log("Re-rendering.");
  }
  
  async function getMovieData(apikey,imdbid) {
    const url = "https://www.omdbapi.com/?apikey="
      + apikey + "&i=" + imdbid;
    try {
      const response = await axios.get(url);
      let fetchResultsRaw = response.data;
      let arrFetchResults = fetchResults;
      arrFetchResults.push({
        poster: fetchResultsRaw.Poster,
        title: fetchResultsRaw.Title,
        director: fetchResultsRaw.Director,
        rating: fetchResultsRaw.Ratings[1].Value,
        id: imdbid
      });
      setFetchResults(arrFetchResults);
      reRender();
    } catch (error) {
      console.error(error);
    }
  }
      
  return (
    <div className='Movies'>
      
      <SRLWrapper options={options}>
        <div className="body-block">
          <div className="block-content">
            <div className="section-title"><h2>Movies</h2></div>
            <div className="image-grid" id="posters">
              {fetchResults.map((fetchResult) => {
                return (
                  <img
                    className="image"
                    src={fetchResult.poster}
                    alt={
                      fetchResult.title
                      +" | DIRECTOR: " +fetchResult.director
                      +" | IMDB RATING: " +fetchResult.rating
                      +" | IMDB ID: " +fetchResult.id
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </SRLWrapper>
      
    </div>
  );
}

export default Movies;
