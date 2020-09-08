import spotify from "./imgs/spotify.png";
import spotifyVideo from "./videos/demo.mov";

import anywhere from "./imgs/anywherefitness.png";
import anywhereVideo from "./videos/fitness.mov";

import tmovieImg from "./imgs/tmovie.png";
import tmovieVideo from "./videos/tmovie.mov";

import gameImg from "./imgs/gameoflife.png";
import gameVideo from "./videos/gameoflifeVideo.mov";

import giftsolar from "./imgs/giftsolar.png";
import bridges from "./imgs/bridges.png";

// 1423px;
export const portfolioData = [
  {
    name: "Gift Solar",
    image: `${giftsolar}`,
    video: ``,
    description: {
      subtitle:
        "Gift Solar is a Full Stack application for a company that sells solar panels, and because of COV-19 users are now able to fill applications online and schedule appoinments from the website.",
      roles: [
        {
          role: "- Designed structure and  website to be fully responsive.",
        },
        {
          role:
            "- Implemented email services to notify admin when there is a new application.",
        },
        {
          role:
            "- Added upload and download functionality for images and pdf files.",
        },
        {
          role:
            "- Implemented functionality for admin to search applications by email or name.",
        },
      ],
    },

    tech_used: {
      frontend:
        "React JS | SASS | axios | React Hook Forms | Progressive Web Applications(PWA).",
      backend:
        "Node JS | Express | bcryptjs | jsonwebtoken, PostgreSQL | knex | heroku | Nodemailer.",
    },

    github: "https://github.com/anthonyamaro15/gift-solar-fe",
    site: "https://giftsolar.netlify.app/",
  },
  {
    name: "Bridges to Prosperity",
    image: `${bridges}`,
    video: ``,
    description: {
      subtitle:
        "Bridges to Prosperity is a company that builds bridges to help people in Africa.",
      roles: [
        {
          role:
            "- Worked with a team of 5 Developers, 1 UI Designer and 3 Data Scientist.",
        },
        {
          role:
            "- Manipulated large amount of data to display bridges information with the communities it served.",
        },
        {
          role: "- Increased performance by 60%.",
        },
        {
          role: "- Designed database schemas.",
        },
        {
          role: "- Created CRUD operations for Routes.",
        },
      ],
    },

    tech_used: {
      frontend: "React JS | LESS | Ant Design | Redux | Mapbox API",
      backend: "Node JS | Express | Swagger-jsdoc | Jest | PostgreSQL | knex",
    },

    github:
      "https://github.com/Lambda-School-Labs/Labs25-Bridges_to_Prosperity-TeamA-be",
    site: "https://main.dvxfvrn3mdjg1.amplifyapp.com/",
  },
  {
    name: "TMovies",
    image: `${tmovieImg}`,
    video: `${tmovieVideo}`,
    description: {
      subtitle:
        "TMovies is a Full Stack web application that allows users to find the latest/newest/ and watch the movie trailer.",
      roles: [
        {
          role:
            "- Designed structure and layout of wesite to be fully responsive.",
        },
        {
          role: "- Utilized TMDb API to get movies/tv shows/anime information.",
        },
      ],
    },

    tech_used: {
      frontend:
        "React JS | SASS | Redux | axios | React Hook Forms | Progressive Web Applications(PWA).",
      backend:
        "Node JS | Express | bcryptjs | jsonwebtoken, PostgreSQL | knex | heroku.",
    },

    github: "https://github.com/anthonyamaro15/netflix-clone",
    site: "https://tmovies.netlify.app",
  },
  {
    name: "Fitness Anywhere",
    image: `${anywhere}`,
    video: `${anywhereVideo}`,
    description: {
      subtitle:
        "Fitness-Anywhere is a Full Stack web application where people can join different types of classes and workout from home/office.",
      roles: [
        {
          role: "- Pair programming with another back-end Developer.",
        },
        {
          role: "- Designed website, user interface with mobile accessibility.",
        },
        {
          role: "- Implemented CRUD operations on the Front-end.",
        },
      ],
    },

    tech_used: {
      frontend:
        "React JS | SASS | Redux | axios | React Hook Forms | Google Maps.",
      backend:
        "Node JS | Express | bcryptjs | jsonwebtoken, PostgreSQL | knex | heroku.",
    },

    github: "https://github.com/Fitness-Anywhere/App",
    site: "https://fitness-anywhere.herokuapp.com/",
  },
  {
    name: "Spotify landing page",
    image: `${spotify}`,
    video: `${spotifyVideo}`,
    description: {
      subtitle: "Spotify Landing page.",
      roles: [
        {
          role: "- Designed and built Landing page.",
        },
        {
          role:
            "- Collaborated with a team of 3 Web Developers, 3 Data Scientist to build a fully functional Web application in a week.",
        },
      ],
    },

    tech_used: {
      frontend: "HTML | LESS | JavaScript",
      backend: "",
    },

    github: "https://github.com/Spotify-Song-Suggester-2-BW/FE-repo",
    site: "https://spotify-song-suggester-2.netlify.app",
  },
  {
    name: "Conways Game of Life",
    image: `${gameImg}`,
    video: `${gameVideo}`,
    description: {
      subtitle:
        "Conways Game of Life is a game with no players. Each round of the simulation examines the current state fo the grid, and then produces an entirely new grid consisting of the old state. Rules are if a cell has 2 or 3 neighbours, it remains alive, otherwise it dies, or if the cell is dead and has exactly 3 neighbours, then it comes to life, otherwise it remians dead.",
      roles: [
        {
          role: "- Designed and built Landing page.",
        },
        {
          role:
            "- Created Algorithm to create cell grids and check its sides for live or dead cells.",
        },
      ],
    },

    tech_used: {
      frontend: "React JS | SASS",
      backend: "",
    },

    github: "https://github.com/anthonyamaro15/game-of-life-BW",
    site: "https://game-of-life-bw.vercel.app",
  },
];
