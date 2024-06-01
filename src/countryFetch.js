// 1e52812f9bd9a0d90f03d649a3220787
// http://api.openweathermap.org/data/2.5/weather?q=Portugal&appid=YOUR_API_KEY

const fetchWeather = async (country) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=1e52812f9bd9a0d90f03d649a3220787&units=metric`
  );
  const data = await response.json();

  return data;
};
export default fetchWeather;
