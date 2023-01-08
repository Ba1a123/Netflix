import React from "react";
import Comment from "./Comment";
import './movie.css';
import Ratings from "./Ratings";
function Movie(props) {
  console.log("in movie path");
  return (
  <div className="movie">
    <div className="movie-cont">
      
    
    
    <h1>movie id is {props.id}</h1>
     <div >
      <Ratings></Ratings>
    </div>
    <div>
    <Comment/>
    </div>
    </div>
  </div>
    );
}

export default Movie;
