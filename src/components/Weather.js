//Import the react object from react package from package.json
import React from "react";

// Define Weather Constant Full of Objects
const Weather = props => (
	<div className="weather__info">
		{ 
			props.city && props.country && <p className="weather__key"> Location: 
				<span className="weather__value"> { props.city }, { props.country }</span>
			</p> 
		}
		{ 
			props.temperature && <p className="weather__key"> Temperature: 
				<span className="weather__value"> { ((props.temperature)*1.8 + 32).toFixed(1) + ' \u00b0F' }</span>
			</p>
		}
		{ 
			props.humidity && <p className="weather__key"> Humidity: 
				<span className="weather__value"> { props.humidity + "%" }</span>
			</p> 
		}
		{ 
			props.description && <p className="weather__key"> Conditions: 
				<span className="weather__value"> { props.description }</span>
			</p> 
		}
		{
			props.wind && <p className="weather__key"> Wind: 
				<span className="weather__value"> { props.wind + " m/h"}</span>
			</p> 
		}
		{ 
			props.error && <p className="weather__error"> { props.error }</p> 
		}
	</div>
);

export default Weather;