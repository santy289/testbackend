const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

export function configExpress(app: any){
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}

