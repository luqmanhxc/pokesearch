import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PokemonGrid from "./components/PokemonGrid";
import Pagination from "./components/Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Layout>
                <PokemonGrid pokeData={pokeData} />
                <Pagination
                  prevUrl={prevUrl}
                  nextUrl={nextUrl}
                  goToPrevPage={goToPrevPage}
                  goToNextPage={goToNextPage}
                />
              </Layout>
            </div>
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            <Layout>
              <PokemonPage />
            </Layout>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
