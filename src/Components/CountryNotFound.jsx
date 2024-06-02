import { useNavigate } from 'react-router-dom';

const CountryNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="bg-red-500 p-10" onClick={() => navigate('/')}>
        🏠
      </button>
      <h1 className="text-9xl text-white">Error: Country not found</h1>
    </>
  );
};

export default CountryNotFound;
