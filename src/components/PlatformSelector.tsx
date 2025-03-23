import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (paltform: Platform) => void;
  selectedPlatform: Platform | null
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
