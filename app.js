const express = require('express');
const sqldb = require('./connection/database');

const app = express();

function getPerson() {
  sqldb.execute('SELECT * FROM person').then((result) => {
    console.log(result);
  });
}

getPerson();

app.use((req, res, next) => {
  res.write('<h1>Hello guys!</h1>');
});

app.listen(3001);
