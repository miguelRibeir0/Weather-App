import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchWeather from './countryFetch';
import CountryStats from './Components/CountryStats';
import CountryNotFound from './Components/CountryNotFound';

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
      <div className="flex h-screen flex-col">
        <button
          className="w-1/4 self-center rounded-xl bg-red-500 p-10"
          onClick={() => navigate('/')}
        >
          🏠
        </button>
        <CountryStats
          name={country?.name}
          description={country?.weather[0].description}
          temp={country?.main.temp}
          feels_like={country?.main.feels_like}
          min={country?.main.temp_min}
          max={country?.main.temp_max}
          humidity={country?.main.humidity}
          speed={country?.wind.speed}
          className="flex h-full flex-grow items-center justify-center"
        />
      </div>
    );
  } else {
    return <CountryNotFound />;
  }
};

export default Details;
