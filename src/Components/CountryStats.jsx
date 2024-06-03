const CountryStats = ({
  name,
  description,
  temp,
  feels_like,
  min,
  max,
  humidity,
  speed,
}) => {
  return (
    <section className="m-auto flex w-72 flex-col justify-center text-center lg:mt-20 lg:w-2/6 lg:items-center lg:justify-start">
      <div>
        <h1 className="rounded-t-lg border-2 border-white p-5 text-4xl font-bold uppercase text-white lg:w-fit lg:text-8xl">
          {name}
        </h1>
        <div className="flex w-full items-center justify-around border-b-2 border-white p-5 lg:border-2 lg:border-t-0 lg:py-7">
          <h3 className="text-3xl capitalize text-white lg:text-5xl">
            {description}
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-y-5 border-b-2 border-white py-7 lg:flex-nowrap lg:justify-around lg:border-2 lg:border-t-0">
          <p className="h-full w-full border-b-2 border-white pb-5 text-3xl text-white lg:h-fit lg:w-fit lg:items-center lg:border-0 lg:pb-0">
            🌡️: {temp}°C
          </p>
          <p className="text-3xl text-white">Feels like: {feels_like}°C</p>
        </div>
        <div className="flex items-center justify-around border-b-2 border-white py-7 lg:justify-around lg:border-2 lg:border-t-0">
          <p className="text-3xl text-white">➖: {min}°C</p>
          <p className="text-3xl text-white">➕: {max}°C</p>
        </div>
        <div className="flex items-center justify-around rounded-b-lg border-b-2 border-white py-7 lg:justify-around lg:border-2 lg:border-t-0">
          <p className="text-3xl text-white">💦: {humidity}%</p>
          <p className="text-3xl text-white">🍃: {speed} km/h</p>
        </div>
      </div>
      <p className="mt-5 text-white opacity-50">
        Data taken from{' '}
        <a href="https://openweathermap.org/" target="_blank">
          https://openweathermap.org
        </a>
      </p>
    </section>
  );
};

export default CountryStats;
