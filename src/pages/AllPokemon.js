import SinglePokemon from "../components/SinglePokemon";

export default function AllPokemon({ pokemondb }) {
  return (
    <div className="grid grid-cols-3 justify-center mx-1 my-1">
      {pokemondb.length > 0 ? (
        pokemondb.map((item) => {
          return <SinglePokemon item={item} key={item.id} />;
        })
      ) : (
        <h1>No Pokemon Found</h1>
      )}
    </div>
  );
}
