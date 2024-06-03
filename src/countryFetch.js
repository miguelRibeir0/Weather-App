const fetchWeather = async (country) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${import.meta.env.VITE_API}&units=metric`
  );
  const data = await response.json();

  return data;
};
export default fetchWeather;
//
