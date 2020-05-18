import spotify from "./imgs/spotify.png";
import spotifyVideo from "./videos/demo.mov";

import anywhere from "./imgs/anywherefitness.png";
import anywhereVideo from "./videos/fitness.mov";

import tmovieImg from "./imgs/tmovie.png";
import tmovieVideo from "./videos/tmovie.mov";

// 1423px;
export const portfolioData = [
  {
    name: "TMovies",
    image: `${tmovieImg}`,
    video: `${tmovieVideo}`,
    description:
      "This is a project that I worked on a weekend when i learned how to work with databases on the back end. So decided to make this project to practice everthing that i've learned so far. This is a full stack application that displays movies information using the Movie database API. It shows the trailer of the movie and its information",
    tech_used: ` SASS, JavaScript, React, React form hooks, React Router, axios,  Redux hooks,  Node JS, Express, bcryptjs, jsonwebtoken, PostgreSQL, Heroku`,

    github: "https://github.com/anthonyamaro15/netflix-clone",
    site: "https://tmovies.netlify.app",
  },
  //   {
  //     name: "Fitness Anywhere",
  //     image: `${anywhere}`,
  //     video: `${anywhereVideo}`,
  //     description:
  //       "This is my second project from Lambda School during that time we learned React, Redux, React protected Routes, for this project we needed to build a fitness application and I was in charge of building the Frontend of this project. People can create/login as clients or instructors, instructors are able to make CRUD operations for their classes, they are also in charge of adding images and locations for their classes, clients are able to see all instructor classes and buy them.",
  //     tech_used:
  //       "SASS, JavaScript, React, React form hooks, React Router, axios, Redux hooks, Stripe",
  //     github: "https://github.com/Fitness-Anywhere/App",
  //     site: "https://fitness-anywhere.herokuapp.com/",
  //   },
  {
    name: "spotify landing page",
    image: `${spotify}`,
    video: `${spotifyVideo}`,
    description:
      "This was my first project from Lambda School during that time we learned HTML, CSS, LESS, we were in charge of building a similiar app to spotify and i was in charge of the Marketing Page, I added some JavaScript to it and is mobile friendly as well.",
    tech_used: "HTML, Css, Less, JavaScript",
    github: "https://github.com/Spotify-Song-Suggester-2-BW/FE-repo",
    site: "https://spotify-song-suggester-2.netlify.app",
  },
];
