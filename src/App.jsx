import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import ProtectedComponent from "./components/ProtectedRoute";
import Home from "./pages/Home";
import PokemonSearchPage from "./pages/PokemonSearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/search/:query" element={<PokemonSearchPage />} />
        <Route
          path="/profile"
          element={<ProtectedComponent component={Profile} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
