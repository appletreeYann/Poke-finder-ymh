export const PokemonCard = ({ name, url, onClick }) => {
    const id = url.split("/").filter(Boolean).pop();
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  
    return (
      <div
        onClick={onClick}
        className="bg-gradient-to-b from-orange-400 to-amber-300 rounded-2xl shadow-lg p-4 text-center cursor-pointer hover:scale-105 transform transition-all"
      >
        <img src={imgUrl} alt={name} className="mx-auto w-24 h-24 mb-4" />
        <p className="text-md font-bold text-red-500 mt-2"># {id}</p>
        <h2 className="text-xl font-bold capitalize text-sky-800">{name}</h2>
        
      </div>
    );
  };
  