import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {isLoading && }
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} padding={"10px"} spacing={10}>
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
