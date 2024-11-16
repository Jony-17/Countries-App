/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
const BASE_URL = `https://restcountries.com/v3.1/all`;

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedValue, setSelectedValue] = useState("All");
  const [sort, setSort] = useState("Sort by");

  useEffect(function () {
    axios
      .get(BASE_URL)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        loading,
        search,
        setSearch,
        selectedValue,
        setSelectedValue,
        sort,
        setSort,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { CountriesProvider, useCountries };
