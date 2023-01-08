import React from "react";

function Movie(props) {
  return (
    <>
    console.log("in movie path");
    <h1>movie id is {props.id}</h1>
    </>
    );
}

export default Movie;
