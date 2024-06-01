import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchWeather from './countryFetch';

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const countryInput = location.state?.country;
  const { data: country, isLoading } = useQuery({
    queryKey: ['country', countryInput],
    queryFn: () => fetchWeather(countryInput),
  });

  if (isLoading) {
    return (
      <div className="mr-3 h-5 w-5 animate-spin">
        <h2 className="text-9xl">🌦️</h2>
      </div>
    );
  }
  if (country && country.weather && country.weather.length > 0) {
    return (
      <div>
        <button className="bg-red-500 p-10" onClick={() => navigate('/')}>
          🏠
        </button>
        <h1 className="text-9xl text-white">{country?.name}</h1>
        <h2 className="text-5xl text-white">{country?.weather[0].main}</h2>
        <h3 className="text-5xl text-white">
          {country?.weather[0].description}
        </h3>
        <p className="text-3xl text-white">temp: {country?.main.temp}°C</p>
        <p className="text-3xl text-white">
          feels like: {country?.main.feels_like}
        </p>
        <p className="text-3xl text-white">
          min temp: {country?.main.temp_min}
        </p>
        <p className="text-3xl text-white">
          max temp: {country?.main.temp_max}
        </p>
        <p className="text-3xl text-white">
          humidity: {country?.main.humidity}
        </p>
        <p className="text-3xl text-white">wind speed: {country?.wind.speed}</p>
      </div>
    );
  } else {
    return (
      <>
        <button className="bg-red-500 p-10" onClick={() => navigate('/')}>
          🏠
        </button>
        <h1 className="text-9xl text-white">Error: Country not found</h1>
      </>
    );
  }
};

export default Details;
