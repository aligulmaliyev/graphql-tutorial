import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import { ICharacter } from "../interfaces/Character";

const CharacterList = () => {
  const { data, error, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character: ICharacter) => (
        <Link to={`/${character.id}`} key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
