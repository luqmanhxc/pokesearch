import Layout from "../layout/Layout";
import PokemonGrid from "../components/PokemonGrid";
import Pagination from "../components/Pagination";
import usePokemonData from "../hooks/usePokemonData";

const Home = () => {
  const { pokeData, loading, prevUrl, nextUrl, goToPrevPage, goToNextPage } =
    usePokemonData();
  return (
    <Layout>
      <PokemonGrid pokeData={pokeData} />
      <Pagination
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
      />
    </Layout>
  );
};

export default Home;
