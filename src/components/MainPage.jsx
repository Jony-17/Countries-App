import { useCountries } from "../context/CountriesContext";
import CountriesCard from "./CountriesCard";
import NotFound from "./NotFound";

function MainPage() {
  const { countries, search, selectedValue } = useCountries();

  function list(arr) {
    return arr.map((country, index) => {
      return (
        <CountriesCard
          key={index}
          cca3={country.cca3}
          name={country.name.common}
          flag={country.flag}
          population={country.population}
          capital={country.capital}
          region={country.region}
          image={country.flags.png}
        />
      );
    });
  }

  function filterCountries(arr) {
    if (
      ["Asia", "Europe", "Americas", "Antarctic", "Africa", "Oceania"].includes(
        selectedValue
      )
    ) {
      return arr.filter((country) => country.region === selectedValue);
    }
    return arr;
  }

  const searchedCountries =
    search.length > 2
      ? countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
      : countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const filteredCountries = filterCountries(searchedCountries);

  const totalResults = filteredCountries.length;

  return (
    <div aria-label="main-page" role="main-page">
      <h1 className="px-[68px] text-lg font-normal">
        Total Countries{""}
        {selectedValue === "All regions" || selectedValue === "All" ? (
          `: ${totalResults}`
        ) : (
          <>
            {" "}
            in the region of <span className="underline">
              {selectedValue}
            </span>: {totalResults}
          </>
        )}
      </h1>

      {/* <ul className="z-10 grid gap-x-10 gap-y-16 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list}{" "}
      </ul> */}

      {totalResults > 0 ? (
        <ul className="z-10 grid gap-x-10 gap-y-16 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list(filterCountries(searchedCountries))}
        </ul>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default MainPage;
