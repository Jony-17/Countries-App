import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  return (
    <div className="min-h-screen font-Glyphic">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:countryCode" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
