import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function SideMenu() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <Sidebar className="h-screen inline-block">
      <Menu >
        <MenuItem component={<Link to="/Dashboard" />}>
          {" "}
          {collapsed ? <GridViewIcon /> : "Dashboard"}
        </MenuItem>
        <SubMenu label={collapsed ? <StorageIcon /> : "Product Database"}>
          <MenuItem component={<Link to="/BrowseProducts" />}>
            {" "}
            Browse Products
          </MenuItem>
          <MenuItem component={<Link to="/ReportProducts" />}>
            {" "}
            Report Products
          </MenuItem>
          <MenuItem component={<Link to="/CreateEntry" />}>
            {" "}
            Create Entry{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label={collapsed ? <PersonIcon /> : "Profile"}>
          <MenuItem component={<Link to="/PersonalDetails" />}>
            {" "}
            Personal Details
          </MenuItem>
          <MenuItem component={<Link to="/ViewEntries" />}>
            {" "}
            View Entries{" "}
          </MenuItem>
        </SubMenu>
        <MenuItem component={<Link to="/Settings" />}>
          {" "}
          {collapsed ? <SettingsIcon /> : "Settings"}
        </MenuItem>
        <MenuItem component={<Link to="/" />}>
          {" "}
          {collapsed ? <LogoutIcon /> : "Logout"}{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggle();
          }}
        >
          {" "}
          {collapsed ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideMenu;
