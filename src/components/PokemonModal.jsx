export const PokemonModal = ({ pokemon, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-yellow-200 rounded-2xl p-6 relative w-96 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-0 right-3 text-red-600 text-3xl font-bold hover:cursor-pointer"
          >
            &times;
          </button>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold capitalize text-left text-sky-700">{pokemon.name}</h2>
            <p className="text-lg">HP {pokemon.stats[0].base_stat}</p>
          </div>
          <div className="mx-auto w-full bg-slate-100 h-50 flex items-center justify-center rounded-lg mb-3">
            <img
              src={pokemon.sprites?.other.dream_world.front_default}
              alt={pokemon.name}
              className=" w-32 h-32"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex justify-between mb-3">
              <p className="text-md text-gray-700">Tipo: {pokemon.types?.map(t => t.type.name).join(", ")}</p>
              <div className="">
                <p className="text-md text-gray-700 flex justify-between gap-3"><span className="text-red-600 text-md">Ataque:</span> {pokemon.stats[1].base_stat}</p>
                <p className="text-md text-gray-700 flex justify-between gap-3"><span className="text-red-600 text-md">Defensa:</span> {pokemon.weight}</p>
              </div>
            </div>
            <div className="flex mb-3">
              <p className="text-lg text-gray-700 mb-3"><span className="text-sky-500">Habilidades:</span> {pokemon.abilities.map(i => i.ability.name).join(", ")}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-md"> <span className="text-green-600">Altura:</span> {pokemon.height}</p>
              <p className="text-md"><span className="text-green-600">Peso</span> {pokemon.weight}</p>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  };
  