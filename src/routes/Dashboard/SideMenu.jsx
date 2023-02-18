import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function SideMenu() {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
        <KeyboardArrowRightIcon />
      </Menu>
    </Sidebar>
  );
}

export default SideMenu;
