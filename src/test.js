// 1e52812f9bd9a0d90f03d649a3220787
// http://api.openweathermap.org/data/2.5/weather?q=Portugal&appid=YOUR_API_KEY

const fetchWeather = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e52812f9bd9a0d90f03d649a3220787&units=metric`
  );
  const data = await response.json();
  console.log(data.main.temp);
};

fetchWeather('Portugal');
