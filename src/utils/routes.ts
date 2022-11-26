const movies = require('../api/functions/movies');

export function routes(app: any){
  app.use('/api/movies', movies);
}

