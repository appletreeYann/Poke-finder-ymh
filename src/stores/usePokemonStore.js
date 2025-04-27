import { create } from 'zustand';
import { getAllPokemons, getPokemonDetails } from '../services/api';
import { toast } from 'react-toastify';

export const usePokemonStore = create((set) => ({
  pokemons: [],
  selectedPokemon: null,
  currentPage: 1,
  pokemonsPerPage: 50,

  fetchPokemons: () => {
    getAllPokemons()
      .then((data) => {
        set({ pokemons: data.results });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  },

  fetchPokemonDetails: (id) => {
    getPokemonDetails(id)
      .then((data) => {
        set({ selectedPokemon: data });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  },

  setCurrentPage: (page) => {
    set({ currentPage: page });
  },

  clearSelectedPokemon: () => {
    set({ selectedPokemon: null });
  }
}));
