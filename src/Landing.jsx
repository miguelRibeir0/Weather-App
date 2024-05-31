import SearchBar from './Components/SearchBar';

const Landing = () => {
  return (
    <>
      <section className="flex min-h-half w-dvw items-center justify-center">
        <h1 className=" cursor-default text-9xl">🌦️</h1>
      </section>
      <section className=" min-h-1/2 m-auto flex w-fit items-center justify-center overflow-x-hidden">
        <SearchBar></SearchBar>
      </section>
    </>
  );
};

export default Landing;
