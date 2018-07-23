const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
var app2 = require('./app');
const apiKey = '0d44ca14ab8e3214ade2b3740970f1f2';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/weather', function (req, res) {
  res.render('index', {weather: null, error: null});
})


app.get('/stock', function (req, res) {
  require('./app');
})
app.post('/weather', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } 
	  
	  else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000,'192.168.23.74',  function () {
  console.log('Example app listening on port 3000!')
})