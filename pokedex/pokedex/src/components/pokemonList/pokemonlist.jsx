import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// css import
import "./pokolist.css";
import Pokemon from "../pokem/pkem";

function PokemonList() {
  const [pokemonData, setpokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokdex_url, setPokedex_url] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  // function download data
  async function dataDownLoad() {
    setIsLoading(true);
    const response = await axios.get(pokdex_url);
    const pokemonResults = response.data.results;
    console.log(response.data);
    setPrevUrl(response.data.previous);
    setNextUrl(response.data.next);
    const pokemonResultPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const pokemonData = await axios.all(pokemonResultPromise);
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites,
        types: pokemon.types,
      };
    });
    console.log(res);
    setIsLoading(false);
    setpokemonData(res);
  }

  // useEffect
  useEffect(() => {
    dataDownLoad();
  }, [pokdex_url]);

  return (
    <div id="data-wrapper">
      <h3>Pokemon Data</h3>
      <div className="pokemon">
        {isLoading
          ? "Loading....."
          : pokemonData.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                image={pokemon.image}
                key={pokemon.id}
              />
            ))}
      </div>
      <div className="btn-container">
        <button
          disabled={prevUrl == null}
          onClick={() => {
            setPokedex_url(prevUrl);
          }}
        >
          Prev
        </button>
        <button
          disabled={nextUrl == null}
          onClick={() => setPokedex_url(nextUrl)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
