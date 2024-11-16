import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function CountriesCard({
  image,
  cca3,
  name,
  flag,
  population,
  region,
  capital,
}) {
  return (
    <Link
      aria-label="country-card"
      to={`details/${cca3}`}
      className="mx-auto grid h-[360px] w-full max-w-xs cursor-pointer auto-rows-auto grid-rows-2 gap-4 overflow-hidden rounded-lg shadow-md outline-none transition-all hover:scale-105 hover:shadow-2xl focus:outline-none"
    >
      <>
        <img className=" h-full w-full" src={image} alt="" />
        <div className="flex flex-col items-start gap-y-2 p-5 ">
          <h1 className=" text-2xl font-extrabold">
            {name} <span className="text-base">{flag}</span>
          </h1>
          <h1 className=" pb-5 text-base font-medium text-grey uppercase">
            {region}
          </h1>
          <ul>
            <li className="space-x-2">
              <strong>👨‍👨‍👦‍👦 Population:</strong>
              <span>{population.toLocaleString()}</span>
            </li>
            <li className="space-x-2">
              <strong>🚩 Capital:</strong>
              <span>{capital ? capital : "Not Available"}</span>
            </li>
          </ul>
        </div>
      </>
    </Link>
  );
}

export default CountriesCard;
