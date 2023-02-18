import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from 'react-router-dom';

function SideMenu() {
  
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to="/Dashboard"/>}>Dashboard</MenuItem>
        <SubMenu label="Product Database">
          <MenuItem component={<Link to="/BrowseProducts"/>}> Browse Products</MenuItem>
          <MenuItem component={<Link to="/ReportProducts"/>}> Report Products</MenuItem>
          <MenuItem component={<Link to="/CreateEntry"/>}> Create Entry </MenuItem>
        </SubMenu>
        <SubMenu label="Profile">
          <MenuItem component={<Link to="/PersonalDetails"/>}> Personal Details</MenuItem>
          <MenuItem component={<Link to="/ViewEntries"/>}> View Entries </MenuItem>
        </SubMenu>
        <MenuItem component={<Link to="/Settings"/>}> Settings </MenuItem>
        <MenuItem component={<Link to="/"/>}> Signout </MenuItem>
        <KeyboardArrowRightIcon />
      </Menu>
    </Sidebar>
  );
}

export default SideMenu;
