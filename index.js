const request = require('request');
const argv = require('yargs').argv;
var http = require('http');


let apiKey = '0d44ca14ab8e3214ade2b3740970f1f2';
let city = argv.c || 'waterloo, canada';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`



request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)

	let message = `It's ${weather.main.temp} degrees in ${weather.name}, ${weather.sys.country}! Minimum temp: ${weather.main.temp_min}. Maximum temp: ${weather.main.temp_max}. `;
	http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(message);
    res.end();
}).listen(8080); 
  }
});




