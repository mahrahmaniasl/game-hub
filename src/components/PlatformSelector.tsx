import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
