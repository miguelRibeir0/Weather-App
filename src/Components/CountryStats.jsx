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
    <section className="m-w-1/2 m-auto flex h-full w-1/2 flex-col justify-center text-center">
      <div>
        <h1 className="rounded-t-lg border-2 border-white p-5 text-8xl uppercase text-white">
          {name}
        </h1>
        <div className="flex items-center justify-around border-2 border-white py-7">
          <h3 className="text-5xl capitalize text-white">{description}</h3>
        </div>
        <div className="flex items-center justify-around border-2 border-white py-7">
          <p className="text-3xl text-white">🌡️: {temp}°C</p>
          <p className="text-3xl text-white">Feels like: {feels_like}°C</p>
        </div>
        <div className="flex items-center justify-around border-2 border-white py-7">
          <p className="text-3xl text-white">➖: {min}°C</p>
          <p className="text-3xl text-white">➕: {max}°C</p>
        </div>
        <div className="flex items-center justify-around rounded-b-lg border-2 border-white py-7">
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
