import React from "react";

function Header() {
  return (
    <header>
      <h1>Weather</h1>
      <p className="headerContainer">
        <a className="headerLine" href="https://openweathermap.org/">
          OpenWeatherMap API
        </a>
      </p>
    </header>
  );
}

export default Header;
