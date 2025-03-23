import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
  SelectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, SelectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, SelectedPlatform);

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
