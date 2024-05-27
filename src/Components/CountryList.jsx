//eslint-disable-next-line
const CountryList = ({ flag, country }) => {
  return (
    <div className="mr-4 w-full cursor-pointer border-b-2 border-gray-300 p-2 transition duration-300 ease-in-out hover:border-blue-400 hover:bg-slate-100">
      <span className="flex">
        <h1 className="w-1/6">{flag} |</h1>

        <p className="w-full">{country}</p>
      </span>
    </div>
  );
};

export default CountryList;
