import fetch from 'node-fetch';

export const getPopular: any = async (req: number, res: any) => {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_API_KEY}}&language=en-US&page=${req}`);
  return movies
}
