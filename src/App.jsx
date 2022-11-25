import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PokemonPage />} />
      </Routes>
    </div>
  );
};

export default App;
