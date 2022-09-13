import React from "react";
import styled from "styled-components";

function ToBeDonatedItemCard({ clothes, deleteItem }) {
  function handleDelete() {
    deleteItem(clothes.id);
    alert("donated!!");
  }
  return (
    <div>
      <div>
        <div>
          <img
            width={250}
            floated="left"
            src={clothes.image}
            alt={clothes.name}
          />
        </div>
        <div>Name: {clothes.name}</div>
        <Details>Category: {clothes.category}</Details>
        {/* <Details>Last Worn: {clothes.last_worn_date}</Details> */}
        <Details>Notes: {clothes.notes}</Details>
        <button onClick={handleDelete}>Donated!</button>
      </div>
    </div>
  );
}

const Details = styled.div`
  font-size: 10px;
`;

export default ToBeDonatedItemCard;
