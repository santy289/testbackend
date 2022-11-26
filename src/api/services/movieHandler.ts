import fetch from 'node-fetch';
import { resPopular, reqPopular } from './schema';

const url = 'https://api.themoviedb.org/3';

export const getPopular: any = async (req: reqPopular, res: resPopular) => {
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
