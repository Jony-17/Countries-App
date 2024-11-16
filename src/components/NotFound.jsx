import { useCountries } from "../context/CountriesContext";

export default function NotFound() {
  const { search } = useCountries();

  return (
    <div className="flex justify-center text-center text-2xl text-black">
      No match found for {search}. ❌
    </div>
  );
}
