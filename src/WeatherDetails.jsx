import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state?.country;

  return (
    <div>
      <button className="bg-red-500 p-10" onClick={() => navigate('/')}>
        🏠
      </button>
      <h1 className=" text-9xl text-white ">{country}</h1>
    </div>
  );
};

export default Details;
