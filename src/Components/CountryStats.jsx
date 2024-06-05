import { Tooltip } from 'react-tooltip';

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
        <h1 className="rounded-t-lg border-2 border-white p-5 text-4xl font-bold uppercase text-white lg:w-fit lg:min-w-96 lg:text-8xl">
          {name}
        </h1>
        <div className="flex w-full items-center justify-around border-b-2 border-white p-5 lg:border-2 lg:border-t-0 lg:py-7">
          <h3 className="text-3xl capitalize text-white lg:text-5xl">
            {description}
          </h3>
        </div>
        <div className="flex items-center justify-around border-b-2 border-white py-7 lg:justify-around lg:border-2 lg:border-t-0">
          <Tooltip id="temperature" opacity={1} />
          <p
            className=" text-3xl text-white "
            data-tooltip-id="temperature"
            data-tooltip-content="Temperature:"
          >
            🌡️: {temp}°C
          </p>
          <Tooltip id="feels-like" opacity={1} />
          <p
            className="ml-1 text-3xl text-white"
            data-tooltip-id="feels-like"
            data-tooltip-content="Feels Like:"
          >
            🧍‍♂️: {feels_like}°C
          </p>
        </div>
        <div className="flex items-center justify-around border-b-2 border-white py-7 lg:justify-around lg:border-2 lg:border-t-0">
          <Tooltip id="minimum-temperature" opacity={1} />
          <p
            className="text-3xl text-white"
            data-tooltip-id="minimum-temperature"
            data-tooltip-content="Minimum Temperature:"
          >
            ➖: {min}°C
          </p>
          <Tooltip id="maximum-temperature" opacity={1} />
          <p
            className="text-3xl text-white"
            data-tooltip-id="maximum-temperature"
            data-tooltip-content="Maximum Temperature:"
          >
            ➕: {max}°C
          </p>
        </div>
        <div className="flex items-center justify-around rounded-b-lg border-b-2 border-white py-7 lg:justify-around lg:border-2 lg:border-t-0">
          <Tooltip id="humidity" opacity={1} />
          <p
            className="text-3xl text-white"
            data-tooltip-id="humidity"
            data-tooltip-content="Humidity:"
          >
            💦: {humidity}%
          </p>
          <Tooltip id="wind-speed" opacity={1} />
          <p
            className="text-3xl text-white"
            data-tooltip-id="wind-speed"
            data-tooltip-content="Wind Speed:"
          >
            🍃: {speed} km/h
          </p>
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
