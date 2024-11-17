import { useNavigate, useParams } from "react-router";
import { useCountries } from "../context/CountriesContext";
import { Link } from "react-router-dom";
import CountriesDetailsList from "./CountriesDetailsList";
// import CountryDetailList2 from "./CountryDetailList2";

function CountryDetails() {
  const { countryCode } = useParams();
  const { countries } = useCountries();
  const navigate = useNavigate();

  const country = countries.find((c) => c.cca3 === countryCode);

  if (!country) {
    return <h1>Country not found</h1>;
  }

  const data = [
    {
      detailName: "🌐 Native Name:",
      detailInfo: country.name.official,
    },
    {
      detailName: "👨‍👨‍👦‍👦 Population:",
      detailInfo: country.population.toLocaleString(),
    },
    {
      detailName: "🚩 Capital:",
      detailInfo: country.capital ? country.capital : "Not available",
    },
    {
      detailName: "🔊 Languages:",
      detailInfo: country.languages
        ? Object.values(country.languages).join(", ")
        : "Not available",
    },
    {
      detailName: "💰 Currencies:",
      detailInfo: country.currencies
        ? Object.values(country.currencies)
            .map((currency) => `${currency.name} (${currency.symbol})`)
            .join(", ")
        : "Not available",
    },
    {
      detailName: "🕐 Timezones:",
      detailInfo: country.timezones.join(", "),
    },
  ];

  console.log(country);
  return (
    <div
      aria-label="country-details"
      className="flex items-center justify-center"
    >
      <div className=" flex flex-col gap-y-20 px-10 py-10  md:overflow-hidden md:px-40 md:py-20">
        <button
          onClick={() => navigate(-1)}
          className="flex w-fit rounded-md  px-8 py-3 shadow-md hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w- h-6 pr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>Back</span>
        </button>
        <div className="flex flex-col gap-y-10   md:h-full md:flex-row  md:gap-x-32 ">
          <div className="space-y-20">
            <img
              className=" max-h-[400px] max-w-xs md:max-w-lg lg:max-w-full"
              src={country.flags.png}
              alt={country.cca3}
            />
          </div>
          <div className="flex flex-col gap-y-5 ">
            <h1 className="text-3xl font-extrabold">
              {country.name.common}{" "}
              <span className="text-base">{country.flag}</span>
            </h1>
            <h1 className="pb-5 text-base font-medium text-grey uppercase">
              {country.region}
            </h1>
            <ul className=" flex flex-col gap-y-10 md:flex-row md:gap-x-40 ">
              <div className="space-y-2 ">
                {data.map((c, i) => {
                  return (
                    <CountriesDetailsList
                      key={i}
                      detailName={c.detailName}
                      detailInfo={c.detailInfo}
                    />
                  );
                })}
              </div>
            </ul>
            <div className="pt-10">
              <h2 className="pb-5 text-xl font-semibold">Border Countries:</h2>
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {country.borders && country.borders.length > 0 ? (
                  country.borders.map((borderCode, i) => {
                    const borderCountry = countries.find(
                      (c) => c.cca3 === borderCode
                    );
                    return borderCountry ? (
                      <Link
                        key={i}
                        className="flex w-fit items-center justify-center rounded-md px-10 py-3 shadow-md hover:shadow-lg"
                        to={`/details/${borderCode}`}
                      >
                        {borderCountry.name.common}{" "}
                      </Link>
                    ) : null;
                  })
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
