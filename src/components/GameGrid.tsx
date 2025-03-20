import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading
          ? [...Array(8)].map((_, index) => <GameCardSkeleton key={index} />)
          : games.map((game) => <GameCards key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
