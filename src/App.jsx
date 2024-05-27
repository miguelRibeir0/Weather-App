import './index.css';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <>
      <section className="flex min-h-half items-center justify-center">
        <h1 className="text-9xl">🌦️</h1>
      </section>
      <section className=" min-h-1/2 m-auto flex w-4/5 items-center justify-center">
        <SearchBar></SearchBar>
      </section>
    </>
  );
}

export default App;
