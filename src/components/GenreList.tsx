import { HStack, Image, List, ListItem , Text} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { data, error } = useGenre();

  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageURL(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
                />
                <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
