import React from "react";

function Movie() {
  const id = usecontext();
  // backend call
  return <h1>movie id is {id}</h1>;
}

export default Movie;