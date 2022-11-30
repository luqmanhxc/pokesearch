import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import Pagination from "./components/Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import LoginButton from "./components/buttons/login";
import LogoutButton from "./components/buttons/logout";
import Profile from "./pages/Profile";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemonData = async () => {
    setPokeData([]);
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemonDetails(res.data.results);
    setLoading(false);
  };

  const getPokemonDetails = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    getPokemonData();
  }, [url]);

  const goToPrevPage = () => {
    setUrl(prevUrl);
  };

  const goToNextPage = () => {
    setUrl(nextUrl);
  };

  return (
    <div className="h-full bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar>
                  <LoginButton />
                  <LogoutButton />
                  <PokemonGrid pokeData={pokeData} />
                  <Pagination
                    prevUrl={prevUrl}
                    nextUrl={nextUrl}
                    goToPrevPage={goToPrevPage}
                    goToNextPage={goToNextPage}
                  />
                </NavBar>
              </div>
            }
          />
          <Route
            path="/pokemon/:id"
            element={
              <NavBar>
                <PokemonPage />
              </NavBar>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
