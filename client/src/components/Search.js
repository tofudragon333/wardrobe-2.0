import React, { useState } from "react";

function Search({
  wardrobe,
  setFilteredClothes,
  setSearchFilter,
  searchFilter,
}) {
  return (
    <div>
      <h5>Search through wardrobe:</h5>
      {/* later, add more filters */}
      <form className="wrapper" onmouseout="this.value = ''; this.blur();">
        {/* <img
          className="search-icon"
          src="https://toppng.com/uploads/preview/search-magnifying-glass-icon-png-grey-1156361611872u4ycd60h.png"
          alt="magnifying glass"
        /> */}
        <input
          className="search-bar-input"
          type="text"
          onChange={(e) => setFilteredClothes(e.target.value)}
          placeholder="Search your clothes!"
        />
        <i class="fas fa-search"></i>
      </form>
      <div class="dropdown">
        <button class="dropbtn">Filter by: {searchFilter}</button>
        <div class="dropdown-content">
          <a
            onClick={() => {
              setSearchFilter("color");
            }}
          >
            Color
          </a>
          <a
            onClick={() => {
              setSearchFilter("category");
            }}
          >
            Category
          </a>
          <a
            onClick={() => {
              setSearchFilter("name");
            }}
          >
            Name
          </a>
          <a
            onClick={() => {
              setSearchFilter("last_worn_date");
            }}
          >
            Last Worn
          </a>
        </div>
      </div>

      <br />
      {/* <form>
        <input
          type="text"
          placeholder="Search by Color"
          onChange={(e) => setFilteredClothes(e.target.value)}
        />
      </form> */}
    </div>
  );
}

export default Search;
