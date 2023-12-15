import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path={"/pokedex"} element={<PokedexPage />} />
        <Route path={"details/:pokename"} element={<PokemonDetailPage />} />
        <Route path={"*"} element={<h1>Página não existe!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;