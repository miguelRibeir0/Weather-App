import CountryList from './CountryList';

const SearchBar = () => {
  return (
    <section>
      <form className="mb-3  flex w-full justify-center ">
        <input
          type="text"
          placeholder="Search..."
          className="mr-4 w-full rounded-lg border-2 border-gray-300 p-2 transition duration-300 ease-in-out focus:border-blue-400 focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="rounded-lg bg-blue-500 p-2 text-white transition duration-300 ease-in-out hover:bg-blue-400  "
        >
          Submit
        </button>
      </form>
      <section className="rounded-lg border-2 border-b-0 border-gray-300 bg-slate-50 ">
        <CountryList flag="📈" country="Portugal"></CountryList>
        <CountryList flag="🐶" country="Espanha"></CountryList>
        <CountryList flag="💀" country="Brazil"></CountryList>
        <CountryList flag="🐐" country="Itália"></CountryList>
      </section>
    </section>
  );
};

export default SearchBar;
