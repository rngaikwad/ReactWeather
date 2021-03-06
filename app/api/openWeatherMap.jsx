var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=566e98d91ce4d2d81fd38f7ac1c7dfd0&units=imperial';

// api key  566e98d91ce4d2d81fd38f7ac1c7dfd0

module.exports = {
	getTemp: function (location) {

		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		 return axios.get(requestUrl).then(function (res) {
	
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else{
				return res.data.main.temp;
			}
		},function(res){
			//throw new Error(res.data.message);
			throw new Error("city not found");
			//return res.data.main.temp;
		})
	}
}