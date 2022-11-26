import fetch from 'node-fetch';
import {
  resSchema,
  reqShema,
  resUpcomingSchema,
} from '../schemas';

const url = 'https://api.themoviedb.org/3';

export const getPopular: any = async (req: reqShema, res: resSchema) => {
  console.log(req.params);
  const page = req.params.page;
  fetch(`${url}/movie/popular?api_key=${process.env.MOVIE_DATABASE_API_KEY}&page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  export const getTop: any = async (req: reqShema, res: resSchema) => {
    console.log(req.params);
    const page = req.params.page;
    fetch(`${url}/movie/top_rated?api_key=${process.env.MOVIE_DATABASE_API_KEY}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  export const getUpcoming: any = async (req: reqShema, res: resUpcomingSchema) => {
    console.log(req.params);
    const page = req.params.page;
    fetch(`${url}/movie/upcoming?api_key=${process.env.MOVIE_DATABASE_API_KEY}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };
