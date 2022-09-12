import React, { useState } from "react";

function Search({ wardrobe, setFilteredClothes }) {
  return (
    <div>
      <h5>Search by category:</h5>
      {/* later, add more filters */}
      <form>
        <input
          type="text"
          onChange={(e) => setFilteredClothes(e.target.value)}
          placeholder="Search by Category"
        />
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
