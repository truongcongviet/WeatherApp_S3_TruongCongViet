import React, { useState, useEffect } from "react";

const WeatherApi = () => {
  const [hasError, setErrors] = useState(false);
  const [weather, setWeather] = useState({});


  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <span>{JSON.stringify(weather)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );;
};
export default WeatherApi;