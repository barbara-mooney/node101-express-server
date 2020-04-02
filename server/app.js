const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const topSpotsData = require('../server/data.json');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.status(200).send('Hello world');
})

app.get('/data', function(req, res, next) {
  res.json(topSpotsData);
})

module.exports = app;
