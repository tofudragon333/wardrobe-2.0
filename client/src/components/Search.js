import React, { useState } from "react";

function Search({ wardrobe, setFilteredClothes }) {
  return (
    <div>
      <h5>Search by category:</h5>
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
          placeholder="Search by Category"
        />
        <i class="fas fa-search"></i>
      </form>

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
