import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  
  return (
    <Card width="100%" borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
