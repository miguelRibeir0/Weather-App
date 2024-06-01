//eslint-disable-next-line
const CountryList = ({ flag, country, onClick }) => {
  return (
    <div
      className="w-full cursor-pointer border-b-2 border-gray-300 p-2 transition duration-200 ease-in-out hover:border-blue-400 hover:bg-slate-100"
      onClick={() => onClick(country)}
    >
      <span className="flex">
        <h1 className="flex w-1/6 justify-center ">{flag}</h1>
        <h1 className=" w-1/12 ">|</h1>
        <p className="w-full">{country}</p>
      </span>
    </div>
  );
};

export default CountryList;
