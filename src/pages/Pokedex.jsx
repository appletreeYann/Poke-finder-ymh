import { useEffect } from "react";
import { usePokemonStore } from "../stores/usePokemonStore";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonModal } from "../components/PokemonModal";
import { Pagination } from "../components/Pagination";
import { ToastContainer, Bounce } from "react-toastify";

export const Pokedex = () => {
  const {
    pokemons,
    selectedPokemon,
    currentPage,
    pokemonsPerPage,
    fetchPokemons,
    fetchPokemonDetails,
    setCurrentPage,
    clearSelectedPokemon,
  } = usePokemonStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const handleCardClick = (url) => {
    const id = url.split("/").filter(Boolean).pop();
    fetchPokemonDetails(id);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {currentPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            url={pokemon.url}
            onClick={() => handleCardClick(pokemon.url)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={clearSelectedPokemon}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        />
    </div>
  );
};
