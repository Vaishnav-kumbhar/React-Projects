import Search from "../searchbar/search";
import "./poke.css";
import PokemonList from "../pokemonList/pokemonlist";
function Poke() {
  return (
    <>
      <h1>Pokedex</h1>
      <Search />
      <PokemonList />
    </>
  );
}

export default Poke;
