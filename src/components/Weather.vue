<template>
	<div id="weather_app">
		<div class="search-box">
			<input
				type="text" 
				class="form-coontrol search-bar" 
				placeholder="Search City..."
				v-model="query"
				@keypress="keyBinding">
		</div>

		<div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
			<div class="location-box">
				<div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
				<div class="date">{{ dataBuilder() }}</div>
			</div>

			<div class="weather-box">
				<div class="temp">{{ Math.round(weather.main.temp) }}&#176;C</div>
				<div class="weather">{{ weather.weather[0].main}}</div>
			</div>
		</div>

		<div class="hourly-weather container" v-if="weather_hourly.length != 0">
			<div class="col-md-3 col-lg-2 col-sm-6 p-1" 
				v-for="hour of weather_hourly" :key="hour.dt">
				<div class="date-card" :class="getWeatherCardClass(hour.weather[0].main)" >
					<h3 class='centered'>{{ secondsToTime(hour.dt) }}</h3>
					<h2 class='centered'>{{ Math.round(hour.temp) }}&#176;C</h2>
					<h4 class='centered'>{{ hour.weather[0].main }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>



<script>

	export default {
		name: 'Weather',
		data(){
			return{
				api_key: '01a62852504eb297365e54f83960be0c',
				base_url: "http://api.openweathermap.org/data/2.5/",
				query: "",
				weather: {},
				weather_hourly: []
			}
		},
		methods: {
			keyBinding (e) {
				if (e.key === "Enter"){
					localStorage.setItem("location", this.query);
					this.getWeather(this.query);
				}
			},
			getWeather (location) {
				if (location == null){
					location = localStorage.getItem("location") || "Chicago";
				}
				fetch(`${this.base_url}weather?q=${location}&units=metric&APPID=${this.api_key}`)
				.then(response => {
					return response.json();
				}).then(res => {
					this.weather = res;
					localStorage.setItem("location_lat", res.coord.lat);
					localStorage.setItem("location_lon", res.coord.lon);
					this.getWeatherHourly();
				});
			},
			getWeatherHourly (){
				this.weather_hourly = [];
				try{
					let lat = localStorage.getItem("location_lat") || null;
					let lon = localStorage.getItem("location_lon") || null;
					if (lat == null || lon == null){
						return;
					}
					fetch(`${this.base_url}onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&units=metric&APPID=${this.api_key}`)
					.then(response => {
						return response.json();
					}).then(res => {
						let i = 0;
						for(let hour of res.hourly){
							this.weather_hourly.push(hour);
							i++;
							if (i == 12){
								break;
							}
						}
					});
				}
				catch{
					// Do nothing / fail silently
				}
			},
			dataBuilder () {
				let d = new Date();
				let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
				let day = days[d.getDay()];
				let date = d.getDate();
				let month = months[d.getMonth()];
				let year = d.getFullYear();
				return `${day} ${date} ${month} ${year}`
			},
			secondsToTime(s) {
				var curdate = new Date(null);
				curdate.setTime(s * 1000);
				curdate.toLocaleString();
				let hour = curdate.getHours() % 12;
				let am_pm = curdate.getHours() > 12 ? "PM" : "AM";
				return `${hour}:00 ${am_pm}`;
			},
			getWeatherClass () {
			/*
				if(typeof this.weather.main != 'undefined'){
					let new_class = '';
					let d = new Date();
					let hour = d.getHours();
					let temp = Math.round(this.weather.main.temp);
					let weather_info = this.weather.weather[0].main;
					if(weather_info == "Clear"){
						if (hour < 8 && hour > 5){
							new_class = "morning";
						}
						if (hour > 22 && hour < 5){
							new_class = "evening";
						}
						if (temp >= 18){
							new_class = "sunny";
						}
						if (temp < 18){
							new_class = "cold";
						}
					}
					else if (weather_info == "Clouds"){
						new_class = "cloudy"
					}
					else{
						new_class = "rainy";
					}
					// TODO: later implementation
					document.body.className += ' ' + new_class;
				}
			*/
			},
			getWeatherCardClass(sky_type){
				if (sky_type == "Clouds"){
					return "cloud-card";
				}
				if (sky_type == "Rain"){
					return "rain-card";
				}
				if (sky_type == "Clear"){
					return "sun-card";
				}
				return "";
			}
		},
		created() {
			this.getWeather();
			document.title = "Weather";
			this.getWeatherClass();

		}
	}
</script>



<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#weather_app {
		transition: 0.4s;
		padding: 30px;
		color: #313131;
	}
	.cold {
		background-image: url('../assets/cold-bg.jpg');
		color: #fff;
	}
	.rainy {
		background-image: url('../assets/rainy-bg.jpg');
		color: #fff;
	}
	.evening {
		background-image: url('../assets/evening-bg.jpg');
		color: #fff;
	}
	.sunny {
		background-image: url('../assets/sunny-bg.jpg');
		color: #313131;
	}
	.morning {
		background-image: url('../assets/morning-bg.jpg');
		color: #fff;
	}

	.cloudy {
		background-image: url('../assets/clouds-bg.jpg');
		color: #fff;
	}

	.weather-wrap {
		padding-top: 30px;
	}

	.search-box .search-bar {
		display: block;
		width: 100%;
		padding: 15px;
		color: #313131;
		font-size: 20px;
		border-radius: 0px 16px 0px 16px;
		appearance: none;
		border: none;
		outline: none;
		background: none;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
		transition: 0.4s;
	}
	.search-box .search-bar:focus {
		box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 16px 0px 16px 0px;
	}

	.location-box .location {
		font-size:  32px;
		font-weight: 500;
		text-align: center;
		text-shadow: 1px 3px rgba(0,0,0,0.25);
	}
	.location-box .date {
		font-size:  20px;
		font-weight: 300;
		text-align: center;
		font-style: italic;
	}
	.weather-box {
		text-align: center;
	}
	.weather-box .temp {
		display: inline-block;
		padding: 10px 25px;
		font-size: 102px;
		font-weight: 900;
		text-shadow: 3px 6px rgba(0,0,0,0.25);
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 16px;
		margin: 30px 0;
		box-shadow: 3px 6px rgba(0,0,0,0.25);
	}
	.weather-box .weather {
		font-size: 48px;
		font-weight: 700;
		font-style: italic;
		text-shadow: 3px 6px rgba(0,0,0,0.25);
	}

	.hourly-weather {
		margin-top: 2em;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.date-card {
		background: rgba(0,0,0,0.75);
		border-radius: 16px;
		display: flex;
		color: #fff;
		flex-direction: column;
		background-size: cover;
	}

	.centered {
		padding-top: 10px;
		text-align: center;
	}
	.sun-card {
		background-image: url('../assets/sun-card.jpg');
		color: #313131;
	}
	.cloud-card {
		background-image: url('../assets/clouds-card.jpg');
	}
	.rain-card {
		background-image: url('../assets/rain-card.jpg');
	}

</style>
