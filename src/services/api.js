const BASE_URL = "https://pokeapi.co/api/v2/";

export const getAllPokemons = () => {
  return fetch(`${BASE_URL}pokemon?limit=150&offset=0`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al obtener los pokémon");
      }
      return response.json();
    });
};

export const getPokemonDetails = (id) => {
  return fetch(`${BASE_URL}/pokemon/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al obtener el detalle del pokémon");
      }
      return response.json();
    });
};
