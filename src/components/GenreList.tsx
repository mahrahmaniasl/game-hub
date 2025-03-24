import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageURL(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
              />
              <Tooltip label={genre.name} hasArrow>
                <Button
                  fontSize="lg"
                  variant="link"
                  fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                >
                  <Text noOfLines={1} maxW="120px">
                    {genre.name}
                  </Text>
                </Button>
              </Tooltip>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
