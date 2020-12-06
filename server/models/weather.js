const request = require("request-promise");

API_KEY = "c475889b148d13270414e325787482c4";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      json: true,
    })
      .then(function (res) {
        callback(res);
      })
      .catch(function (err) {
        console.log(err);
        callback({ error: "could not reach openweather API" });
      });
  }
}

module.exports = Weather;
