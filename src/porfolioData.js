import spotify from "./imgs/spotify.png";
import spotifyVideo from "./videos/demo.mov";

import anywhere from "./imgs/anywherefitness.png";
import anywhereVideo from "./videos/fitness.mov";

import tmovieImg from "./imgs/tmovie.png";
import tmovieVideo from "./videos/tmovie.mov";

import gameImg from "./imgs/gameoflife.png";
import gameVideo from "./videos/gameoflifeVideo.mov";

// 1423px;
export const portfolioData = [
  {
    name: "TMovies",
    image: `${tmovieImg}`,
    video: `${tmovieVideo}`,
    description:
      "This is a project that I worked on a weekend when i learned how to work with databases on the back end. So decided to make this project to practice everthing that i've learned so far. This is a full stack application that displays movies information using the Movie database API. It shows the trailer of the movie and its information, mobile friendly, and can download the app on mobile or desktop",
    tech_used: ` SASS, JavaScript, React, React form hooks, React Router, axios,  Redux hooks, Progressive Wep Application (PWA),  Node JS, Express, bcryptjs, jsonwebtoken, PostgreSQL, Heroku`,

    github: "https://github.com/anthonyamaro15/netflix-clone",
    site: "https://tmovies.netlify.app",
  },
  {
    name: "Fitness Anywhere",
    image: `${anywhere}`,
    video: `${anywhereVideo}`,
    description:
      "This is my second project from Lambda School during that time we learned React, Redux, React protected Routes, for this project we needed to build a fitness application and I was in charge of building the Frontend of this project. People can create/login as clients or instructors, instructors are able to make CRUD operations for their classes, they are also in charge of adding images and locations for their classes, clients are able to see all instructor classes and buy them.",
    tech_used:
      "SASS, JavaScript, React, React form hooks, React Router, axios, Redux hooks, Stripe",
    github: "https://github.com/Fitness-Anywhere/App",
    site: "https://fitness-anywhere.herokuapp.com/",
  },
  {
    name: "Conways Game of Life",
    image: `${gameImg}`,
    video: `${gameVideo}`,
    description:
      "Conways Game of Life is my Computer Science project, I built this game for having and understanding the importance of Data Structors and Algorightms. Each round of the simulation examines the current state fo the grid, and then produces an entirely new grid consisting of the old state. Rules are if a cell has 2 or 3 neighbours, it remains alive, otherwise it dies, or if the cell is dead and has exactly 3 neighbours, then it comes to life, otherwise it remians dead. You can download this game on desktop or mobile.",
    tech_used: "SASS, JavaScript and React, Progressive Web Application (PWA)",
    github: "https://github.com/anthonyamaro15/game-of-life-BW",
    site: "https://game-of-life-bw.vercel.app/",
  },
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
