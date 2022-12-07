import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PokemonGrid from "./components/PokemonGrid";
import Pagination from "./components/Pagination";
import Profile from "./pages/Profile";
import { BrowserRouter } from "react-router-dom";
import usePokemonData from "./hooks/usePokemonData";
import Spinner from "./components/spinner";

const App = () => {
  const { pokeData, loading, prevUrl, nextUrl, goToPrevPage, goToNextPage } =
    usePokemonData();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Layout>
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <PokemonGrid pokeData={pokeData} />
                    <Pagination
                      goToPrevPage={goToPrevPage}
                      goToNextPage={goToNextPage}
                      prevUrl={prevUrl}
                      nextUrl={nextUrl}
                    />
                  </>
                )}
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
