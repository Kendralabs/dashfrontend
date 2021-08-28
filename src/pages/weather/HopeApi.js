import axios from 'axios';

const URL = 'https://openweathermap.org/data/2.5/weather';
const API_KEY = '726c82c51b3b29c364c60d5994f7d9b0'

export const fetchWeather = (query) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}`);