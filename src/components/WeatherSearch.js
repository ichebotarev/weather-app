import axios from "axios";
import { useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./.env";

export default function WeatherSearch() {
	const [weather, setWeather] = useState("");
	const [city, setCity] = useState("");
	const apiKey = "5275784f085a4e1dccaf89f70f9eaef2";
	console.log(apiKey);

	const apiCall = async (e) => {
		e.preventDefault();
		const loc = e.target.elements.loc.value;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
		const req = axios.get(url);
		const res = await req;
		setWeather({
			descp: res.data.weather[0].description,
			temp: res.data.main.temp,
			city: res.data.name,
			humidity: res.data.main.humidity,
			press: res.data.main.pressure,
		});

		setCity(res.data.name);
	};
	let k = weather.temp;
	let C = k - 273.15;

	const Weath = () => {
		return (
			<div>
				<div className="winfo">
					Weather information for {city}
					<hr></hr>
				</div>
				<div className="Weath">
					<div className="welement">Weather : {weather.descp}</div>
					<div className="welement">Temperature : {C.toFixed(2)} &#8451;</div>
					<div className="welement">Humidity :{weather.humidity} %</div>
					<div className="welement">Pressure : {weather.press} mb</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="weathhead">Weather Info</div>
			<div className="mainweather">
				<div className="weather">
					<form onSubmit={apiCall} className="form">
						<input type="text" placeholder="city" name="loc" />
						<Button outline color="primary">
							Search
						</Button>
					</form>

					{weather && <Weath />}
				</div>
			</div>
		</>
	);
}
