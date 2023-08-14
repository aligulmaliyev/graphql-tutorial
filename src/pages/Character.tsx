import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";
const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (loading) return <div>Loading...</div>;
    
  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode: any) => (
            <div>
              {episode.name} - {episode.episode}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
