import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchWeather from './countryFetch';
import CountryStats from './Components/CountryStats';
import CountryNotFound from './Components/CountryNotFound';
import homeLogo from './assets/home.svg';
import landing from './assets/landing.svg';

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
      <div className="fixed flex h-dvh w-dvw animate-spin items-center justify-center overflow-hidden">
        <img src={landing} className="w-48 overflow-hidden" />
      </div>
    );
  }
  if (country && country.weather && country.weather.length > 0) {
    return (
      <div className="flex h-screen flex-col">
        <img
          src={homeLogo}
          className="my-10 w-20 cursor-pointer self-center rounded-xl border-2 border-white p-5 hover:bg-white hover:bg-opacity-10 lg:w-24"
          onClick={() => navigate('/')}
        ></img>
        <CountryStats
          name={country?.name}
          description={country?.weather[0].description}
          temp={country?.main.temp}
          feels_like={country?.main.feels_like}
          min={country?.main.temp_min}
          max={country?.main.temp_max}
          humidity={country?.main.humidity}
          speed={country?.wind.speed}
        />
      </div>
    );
  } else {
    return <CountryNotFound />;
  }
};

export default Details;
