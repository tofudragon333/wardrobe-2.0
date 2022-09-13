import React from "react";
import { useState } from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import { useNavigate } from "react-router";

function ClothingArticle({
  clothes,
  setDonate,
  setWardrobe,
  deleteItem,
  updateLastWorn,
  setItemToUpdate,
}) {
  const navigate = useNavigate();
  // console.log("clothing article:", clothes);

  function handleDonateClick() {
    console.log("donation button clicked, item info:", clothes);
    setDonate(clothes);
    navigate(`/donation_site`);
  }

  function handleUpdateClick() {
    console.log("update button clicked, item info:", clothes);
    setItemToUpdate(clothes);
    navigate(`/update`);
  }

  function handleDelete() {
    deleteItem(clothes.id);
    alert("deleting from closet...");
  }

  function handleDate() {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let id = clothes.id;

    let date = `${year}${month < 10 ? `0${month}` : `${month}`}${
      day < 10 ? `0${day}` : `${day}`
    }`;
    const dateAsInteger = parseInt(date);
    console.log("handleDate/ClothingArticle.js:", dateAsInteger);
    updateLastWorn(dateAsInteger, clothes);
  }

  return (
    <Card>
      <div>
        <div>
          <img
            width={250}
            floated="left"
            src={clothes.image}
            alt={clothes.name}
            // onClick={handleWardrobeClick}
          />
        </div>
        <div>Name: {clothes.name}</div>
        <Details>Category: {clothes.category}</Details>
        <Details>Last Worn: {clothes.last_worn_date}</Details>
        <Details>Notes: {clothes.notes}</Details>
        <button onClick={handleUpdateClick}>Update</button>
        <button onClick={handleDonateClick}>Donate</button>
        <button onClick={handleDate}>Worn Today</button>
        <button onClick={handleDelete}> x </button>
      </div>
    </Card>
  );
}

const Details = styled.div`
  font-size: 10px;
`;

export default ClothingArticle;
