export default function WeatherCard({ weather, city }) {
	let k = weather.temp;
	let C = k - 273.15;
	return (
		<>
			<div className="winfo">
				Weather information for {city}
				<hr></hr>
			</div>
			<div className="Weath">
				<div className="welement">Weather : {weather.descp}</div>
				<div className="welement">Temperature : {C.toFixed(2)} &#8451;</div>
				<div className="welement">Humidity :{weather.humidity} %</div>
				<div className="welement">Pressure : {weather.press} mb</div>
			</div>{" "}
		</>
	);
}
