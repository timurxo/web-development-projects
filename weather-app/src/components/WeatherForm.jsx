import React, { useState } from "react";

function WeatherForm() {
  const https = require("https");
  const [currentWeather, setWeather] = useState("15");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(
    "http://openweathermap.org/img/wn/03n@2x.png"
  );
  const [city, setCity] = useState("");

  function handleChange(event) {
    // get input from user and set value to "name"
    setCity(event.target.value);
  }

  const [headingText, setHeading] = useState("");

  // ====================== DEAL WITH API CALL =======================
  function handleClick() {
    // put value inside of h1
    setHeading(city);

    const query = city;
    const apiKey = "YOUR API KEY";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;

    https.get(url, function(response) {
      console.log(response.statusCode);
      console.log(url);

      // get data from API
      response.on("data", function(data) {
        // convert data to javascript object (convert JSON to string)
        const weatherData = JSON.parse(data);
        // RETRIEVE TEMPERATURE AND SEND TO CLIENTS BROWSER
        if (response.statusCode < 400) {
          const temp = weatherData.main.temp;
          const description = weatherData.weather[0].description;
          const iconX = weatherData.weather[0].icon;

          setWeather(temp);
          setDescription(description);

          const imageURL =
            "http://openweathermap.org/img/wn/" + iconX + "@2x.png";
          setIcon(imageURL);

          setHeading(
            "It's " +
              currentWeather +
              " °C in " +
              city.charAt(0).toUpperCase() +
              city.slice(1)
          );
        } else {
          setHeading("Try again");
          setDescription("");
          setIcon("http://openweathermap.org/img/wn/03n@2x.png");
        }
      });
    });
    console.log("weather: " + currentWeather);
    console.log("descr: " + description);

    setCity("");
  }

  // ====================== DEAL WITH BUTTON =======================
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <img src={icon} alt="img" />
      <p> {description} </p>

      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter city name"
        value={city}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "#086972" : "white" }}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default WeatherForm;
