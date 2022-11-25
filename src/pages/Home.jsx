import NavBar from "../components/NavBar";
import PokemonGrid from "../components/PokemonGrid";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <NavBar />
      <PokemonGrid />
      <Pagination />
    </div>
  );
};

export default Home;
