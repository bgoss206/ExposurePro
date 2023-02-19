import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import SearchBar from "./SearchBar";


function BrowseProducts() {
  return (
    <div>
    <div>
      <SideMenu />
      <SearchBar/>
    </div>
    <div className="inline-block">
    <SearchBar/>
      This is the Browse Product page
      </div>
      </div>

  );
}

export default BrowseProducts;
