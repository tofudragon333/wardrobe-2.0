import React, { useState } from "react";

function Search({ wardrobe, setFilteredClothes }) {
  return (
    <div>
      <h5>Search by name:</h5>
      {/* later, add more filters */}
      <form>
        <input
          type="text"
          onChange={(e) => setFilteredClothes(e.target.value)}
          placeholder="Search by Name"
        />
      </form>
      <br />
    </div>
  );
}

export default Search;
