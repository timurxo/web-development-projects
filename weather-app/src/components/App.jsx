import React from "react";
// import "./public/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import WeatherForm from "./WeatherForm";

export default function App() {
  return (
    <div className="App">
      <Header />
      <WeatherForm />
      <Footer />
    </div>
  );
}
