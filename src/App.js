import './App.css';
import React from 'react';
import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from "./components/Nav";
import { Route, Routes  } from 'react-router-dom';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/movie" element={<Movie id={23} />} />
        </Routes>
      <Nav></Nav>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED"fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedymovies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horrormovies"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romancemovies"fetchUrl={requests.fetchRomanceMovies}/>  
      <Row title="Documentaries"fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
