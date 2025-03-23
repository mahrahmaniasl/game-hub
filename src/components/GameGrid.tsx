import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

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
              <GameCardContainer key={index}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
