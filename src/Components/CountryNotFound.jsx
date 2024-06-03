import { useNavigate } from 'react-router-dom';
import homeLogo from '../assets/home.svg';

const CountryNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src={homeLogo}
        className="mx-auto my-10 w-1/5 cursor-pointer self-center rounded-xl border-2 border-white p-5 hover:bg-white hover:bg-opacity-10 lg:w-24"
        onClick={() => navigate('/')}
      ></img>
      <h1 className="text-center text-3xl text-white lg:mt-20 lg:text-7xl">
        Error: Country not found
      </h1>
    </>
  );
};

export default CountryNotFound;
