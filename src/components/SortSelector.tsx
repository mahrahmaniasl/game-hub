import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
        Sort by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Added Date</MenuItem>
        <MenuItem>Rateing</MenuItem>
        <MenuItem>name</MenuItem>
        <MenuItem>Release Date</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
