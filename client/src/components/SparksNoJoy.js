import React from "react";
import styled from "styled-components";
import ClothingArticle from "./ClothingArticle";
import { Grid, Card } from "semantic-ui-react";

function SparksNoJoy({
  clothes,
  setDonate,
  setWardrobe,
  deleteItem,
  updateLastWorn,
  setItemToUpdate,
}) {
  const cards = clothes.map((item) => {
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
      <h1>Sparks No Joy :(</h1>
      <Card.Group className="grid-container" itemsPerRow={3}>
        {cards}
      </Card.Group>
    </div>
  );
}

export default SparksNoJoy;
