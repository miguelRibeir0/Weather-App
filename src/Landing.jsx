import SearchBar from './Components/SearchBar';
import landing from './assets/landing.svg';
import github from './assets/github.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className="flex min-h-half w-dvw items-center justify-center">
        <img src={landing} className="w-48" />
      </section>
      <section className="min-h-1/2 m-auto flex w-fit flex-col items-center justify-center overflow-x-hidden">
        <SearchBar></SearchBar>
        <p className="mt-5 w-60 text-center text-white opacity-90">
          Search for a country/city above to get their weather info!
        </p>
        <Link
          to={'https://github.com/miguelRibeir0/weather-app'}
          target="_blank"
        >
          <img
            src={github}
            className="mt-5 w-12 cursor-pointer hover:opacity-80"
          />
        </Link>
      </section>
    </>
  );
};

export default Landing;
