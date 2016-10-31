var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application build on React.
      </p>
      <p>
        Here are some tools I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript
            framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used OpenWeatherMap
            for API, to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
