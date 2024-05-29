import './index.css';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <>
      <section className="relative  min-h-half w-dvw">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-9xl">
          🌦️
        </h1>
      </section>
      <section className=" min-h-1/2 m-auto flex w-fit items-center justify-center overflow-x-hidden">
        <SearchBar></SearchBar>
      </section>
    </>
  );
}

export default App;
