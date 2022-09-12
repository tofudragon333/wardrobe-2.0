import React from "react";
import { useState, useEffect } from "react";
import ClothingArticle from "./ClothingArticle";
import { Card } from "semantic-ui-react";

// Stretch goal

function Wishlist({ user, wishlist }) {
  // const items = wishlist.map((item) => (
  //   <ClothingArticle clothes={wishlist} key={item.id} />
  // ));

  return (
    <>
      <h1>Wishlist</h1>
      <h5>Stretch goal/Coming Soon!</h5>
      {/* <Card.Group itemsPerRow={4}>{items}</Card.Group>; */}
    </>
  );
}

export default Wishlist;
