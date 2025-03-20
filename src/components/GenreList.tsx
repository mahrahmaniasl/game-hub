import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error } = useGenre();

  return (
    <>
      {error && <p>{ error }</p>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
