import { useCountries } from "../context/CountriesContext";

function SearchAndFilter() {
  const { search, setSearch, selectedValue, setSelectedValue, sort, setSort } =
    useCountries();

  const regions = [
    { name: "All regions" },
    { name: "Asia" },
    { name: "Africa" },
    { name: "Europe" },
    { name: "Americas" },
    { name: "Antarctic" },
    { name: "Oceania" },
  ];

  return (
    <div
      role="search-and-filter"
      aria-label="search-and-filter"
      className="z-10 flex w-full flex-col justify-start gap-y-10 px-8 py-10 md:flex-row md:justify-between md:p-16"
    >
      <div>
        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 mr-10 flex items-center pl-5">
            <svg
              className="h-4 w-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            placeholder="Search for a country..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-md block w-full rounded-lg bg-gray-50 p-4 pl-20 shadow-md focus:shadow-lg  focus:outline-none md:w-[30vw]"
          />
        </div>
      </div>

      <div className="flex justify-between gap-x-10">
        <select
          id="countries"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-md block w-8/12 cursor-pointer rounded-lg bg-gray-50 p-4 text-gray-900 shadow-md focus:outline-none md:w-[250px]"
        >
          <option value="">Sort by...</option>
          <option value="population">Population</option>
          <option value="name">Name (A-Z)</option>
          <option value="area">Area</option>
          <option value="density">Population Density</option>
          <option value="neighbors">Number of Neighbors</option>
        </select>

        <select
          id="countries"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className=" text-md block w-8/12 cursor-pointer rounded-lg bg-gray-50 p-4 text-gray-900 shadow-md focus:outline-none md:w-[250px] "
        >
          {regions.map((region, index) => (
            <option value={region.name} key={index}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchAndFilter;
