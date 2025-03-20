import useGenre from "../hooks/useGenre"

const GenreList = () => {
    const { genres, error, isLoading } = useGenre();

  return (
    <>
    {error && {error}}
    <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
    </>
  )
}

export default GenreList