import SinglePokemon from "../components/SinglePokemon";
//import Filter from "../components/Filter";
//import Search from "../components/Search";

export default function AllPokemon({ pokemondb }) {
  return (
    <div className=" w-screen">
      <div className="flex-auto text-4xl bg-red-500/80  ">
        <h2 className="flex flex-rows font-medium p-7">Pokedex</h2>

        {/* <Search pokemondb={pokemondb} />
        <Filter pokemondb={pokemondb} /> */}
      </div>

      <div className="flex justify-center p-7 max-[700px]:flex flex-wrap">
        {pokemondb.length > 0 ? (
          pokemondb.map((item) => {
            return <SinglePokemon item={item} key={item.id} />;
          })
        ) : (
          <h1>No Pokemon Found</h1>
        )}
      </div>
    </div>
  );
}
