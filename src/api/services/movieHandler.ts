import fetch from 'node-fetch';

const url = 'https://api.themoviedb.org/3';

export const getPopular: any = async (req: any, res: any) => {
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
