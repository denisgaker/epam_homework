import * as React from "react";
import MovieCard from "./MovieCard/MovieCard";
import { Datats } from "../Data";
import ImageHelper from "./imagehelper/ImageHelper";
import Interstellar from './img/interstellar.jpg';
import RikAndMorti from './img/rikAndMorti.jpg';
import StrangerThings from './img/strangerThings.jpg';
import './style.css';

const MovieData = Datats.movies;
MovieData[0].image = RikAndMorti;
MovieData[1].image = StrangerThings;
MovieData[2].image = Interstellar;

const MovieList: React.FC = () => {
  return(
    <>
        {MovieData.map((movie) => (
          <div className='MovieCard' key={movie.id}>
            <ImageHelper imagePath={movie.image} />
            <MovieCard
              title={movie.title}
              description={movie.description}
              year={movie.year}
              genre={movie.genre}
              key={movie.id}
            />
          </div>
        ))}
      </>
  )
}

export default MovieList;