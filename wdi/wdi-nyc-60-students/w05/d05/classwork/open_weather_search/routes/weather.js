const router = require('express').Router();
const { findWeatherByCity } = require('../services/weather');
const icons = require('../weather-icons');

router.get('/city', findWeatherByCity, (req, res) => {
   let icon = icons[res.weather.weather[0].main.toLowerCase()];
  res.render('weather', {
    weather: res.weather,
     icon,
  });
});

module.exports = router;
