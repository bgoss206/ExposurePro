import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function SideMenu() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled} = useProSidebar();
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
      </Menu>
      <main>
      <h1
          onClick={() => {
            toggle();
          }}
          style={{ color: "white"}}
        >
        <img src="assets/collapse.png"></img>
        </h1>
        
      </main>
    </Sidebar>
    
  );
}

export default SideMenu;
