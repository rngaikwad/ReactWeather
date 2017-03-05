var React = require('react');

var About =  ( props)  =>{

	return(
				<div>
				<h3 className="text-center"> About</h3>
				<p>this is a weather application build on React. I have bult this is 
				for the complete React Web app developer Course.</p>
				<p>
					Here are some of the tools I used:
				</p>
				<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> -This was the javascript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to Search for Weather data by city name					
				</li>
					


				</ul>
				</div>
			)
};
module.exports = About;