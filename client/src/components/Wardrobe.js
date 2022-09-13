import React, { useState, useEffect } from "react";
// import { useEffect } from "react";
import ClothingArticle from "./ClothingArticle";
import { Grid, Card } from "semantic-ui-react";
import Search from "./Search";

function Wardrobe({
  wardrobe,
  setDonate,
  setWardrobe,
  deleteItem,
  updateLastWorn,
  setItemToUpdate,
  runScanTest,
}) {
  // filter by category of item
  const [filteredClothes, setFilteredClothes] = useState("");

  // filter by category of item, part 2
  const clothesToDisplay = wardrobe.filter((item) => {
    if (item.category.toLowerCase().includes(filteredClothes.toLowerCase())) {
      return item;
    }
  });

  // // filter by color of item, part 2
  // const clothesToDisplay2 = wardrobe.filter((item) => {
  //   if (item.category.toLowerCase().includes(filteredClothes2.toLowerCase())) {
  //     return item;
  //   }
  // });

  // to run the scan whenever wardrobe reloads/is updated
  useEffect(() => {
    runScanTest();
  }, []);

  const cards = clothesToDisplay.map((item) => {
    if (item.donation_site_id === 1) {
      return (
        <ClothingArticle
          clothes={item}
          setDonate={setDonate}
          key={item.id}
          setWardrobe={setWardrobe}
          deleteItem={deleteItem}
          setItemToUpdate={setItemToUpdate}
          updateLastWorn={updateLastWorn}
        />
      );
    }
  });

  return (
    <div>
      <h1>Wardrobe</h1>
      <Search wardrobe={wardrobe} setFilteredClothes={setFilteredClothes} />
      <Card.Group className="grid-container" itemsPerRow={3}>
        {cards}
      </Card.Group>
    </div>
  );
}

export default Wardrobe;
