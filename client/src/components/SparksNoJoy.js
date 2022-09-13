import React from "react";
import styled from "styled-components";
import ClothingArticle from "./ClothingArticle";

function SparksNoJoy({
  clothes,
  setDonate,
  setWardrobe,
  deleteItem,
  updateLastWorn,
  setItemToUpdate,
}) {
  return (
    <div>
      <h1>Sparks No Joy :(</h1>
      {clothes.map((item) => {
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
      })}
    </div>
  );
}

export default SparksNoJoy;
