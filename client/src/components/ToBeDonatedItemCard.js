import { set } from "date-fns";
import React from "react";
import styled from "styled-components";

function ToBeDonatedItemCard({ clothes, deleteItem, takeBackItem }) {
  function handleDelete() {
    deleteItem(clothes.id);
    alert("donated!!");
  }

  function handleTakeBackAction() {
    takeBackItem(clothes);
    // alert("taking item back!");
  }

  return (
    <div>
      <div className="custom-card">
        <img
          width={250}
          floated="left"
          src={clothes.image}
          alt={clothes.name}
        />
        <div>Name: {clothes.name}</div>
        <Details>Category: {clothes.category}</Details>
        <Details>Notes: {clothes.notes}</Details>
        <button className="button" onClick={handleTakeBackAction}>
          Take Back!
        </button>
        <button className="button" onClick={handleDelete}>
          Donated!
        </button>
      </div>
    </div>
  );
}

const Details = styled.div`
  font-size: 10px;
`;

export default ToBeDonatedItemCard;
