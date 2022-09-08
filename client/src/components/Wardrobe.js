import React, { useState } from "react";
// import { useEffect } from "react";
import ClothingArticle from "./ClothingArticle";
import { Grid, Card } from "semantic-ui-react";
import Search from "./Search";

function Wardrobe({ wardrobe, setDonate, setWardrobe, deleteItem, updateLastWorn }) {
  const [filteredClothes, setFilteredClothes] = useState("");

  const clothesToDisplay = wardrobe.filter((item) => {
    if (item.name.toLowerCase().includes(filteredClothes.toLowerCase())) {
      return item;
    }
  });

  return (
    <div>
      <h1>Wardrobe</h1>
      <Search wardrobe={wardrobe} setFilteredClothes={setFilteredClothes} />
      <Card.Group itemsPerRow={4}>
        {clothesToDisplay.map((item) => (
          <ClothingArticle
            clothes={item}
            setDonate={setDonate}
            key={item.id}
            setWardrobe={setWardrobe}
            deleteItem={deleteItem}
            updateLastWorn={updateLastWorn}
          />
        ))}
      </Card.Group>
    </div>
  );
}

export default Wardrobe;
