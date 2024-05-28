import CountryList from './CountryList';
import { useState } from 'react';

const test = [
  {
    flag: '📈',
    country: 'Portugal',
  },
  {
    flag: '🐶',
    country: 'Panama',
  },
  {
    flag: '💀',
    country: 'Porto Rico',
  },
  {
    flag: '🐐',
    country: 'Peru',
  },
  {
    flag: '🐧',
    country: 'Oslo',
  },
];

const SearchBar = () => {
  let [countries] = useState(test);
  let [inputText, setInputText] = useState('');

  let regex = new RegExp(inputText, 'gi');

  return (
    <section>
      <form className="mb-3  flex w-full justify-center ">
        <input
          type="text"
          placeholder="Search..."
          className="mr-4 w-full rounded-lg border-2 border-gray-300 p-2 transition duration-300 ease-in-out focus:border-blue-400 focus:outline-none focus:ring-0"
          value={inputText}
          onChange={(e) => {
            const regex = /^[a-zA-Z]*$/;
            if (e.target.value === '' || regex.test(e.target.value)) {
              setInputText(e.target.value);
            }
          }}
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
        {inputText &&
          countries.map((country, index) =>
            country.country.match(regex) ? (
              <CountryList
                key={index}
                flag={country.flag}
                country={country.country}
              />
            ) : null
          )}
      </section>
    </section>
  );
};

export default SearchBar;
