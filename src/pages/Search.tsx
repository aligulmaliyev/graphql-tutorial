import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Mutation from "./Mutation";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocations, { data, error, loading, }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  return (
    <div>
      <Mutation/>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Spinner...</div>}
      {error && <div>Something went wrong...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character: any) => (
            <li>{character.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
