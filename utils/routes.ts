const movies = require('../api/movies');

function routes(app){
  app.use('/api/movies', movies);
}

module.exports = routes;
