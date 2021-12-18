/*Express 

1. What is express ?
express is node js moudle ( framework ) buit in top of http moudle . express help us buit a web server very easily and scalable

2. other options 
    1. Sails js
    2. Koa
    3. Hapi

Express advantage :
    1. Easy to use
    2. You strucutrue you own application
    3. Prevents security risks
    4. Wide range of suppored moudle
    5. Uses middleware

*/
const express = require('express');

const app = express();

app.use((req, res, next) => {
  if (req.ip === '123') {
    res.end();
  } else {
    next();
  }
});

app.use(() => {
  console.log('Hey from express 2');
});

app.use((req, res) => {
  console.log('Error');
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the express server !</h1>');
  console.log('Hey from /');
});

app.get('/about', (req, res) => {
  console.log('Hey from /about');
});

app.listen(5000);
