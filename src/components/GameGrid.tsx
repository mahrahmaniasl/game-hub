import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

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
          ? [...Array(8)].map((_, index) => (
              <GameCardContainer>
                <GameCardSkeleton key={index} />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer>
                <GameCards key={game.id} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
