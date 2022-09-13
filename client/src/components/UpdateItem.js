import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

function UpdateItem({ user, addItem, itemToUpdate, setRefresh, refresh }) {
  // console.log(itemToUpdate);
  // debugger
  let currentItem = {
    id: itemToUpdate.id,
    user_id: itemToUpdate.user_id,
    donation_site_id: 1,
    name: itemToUpdate.name,
    image: itemToUpdate.image,
    category: itemToUpdate.category,
    color: itemToUpdate.color,
    last_worn_date: parseInt(itemToUpdate.last_worn_date),
    notes: itemToUpdate.notes,
  };

  //   const populateItemDetails = () => {
  //     fetch(`/clothing_articles/{itemToUpdate.id}`)
  //       .then((r) => r.json())
  //       .then((data) => console.log("UpdateItem:", data));
  //   };

  const [formData, setFormData] = useState(currentItem);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log("name:", name);
    // console.log("value:", value);
    setFormData({ ...formData, [name]: value });
  }

  function handleNumberChange(e) {
    const value = parseInt(e.target.value);
    const { name } = e.target;
    // console.log("name:", name);
    // console.log("value:", value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", itemToUpdate.id);

    fetch(`/clothing_articles/${itemToUpdate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formData),
    })
      // .then((response) => response.json())
      // .then((data) => console.log(data))
      .then(function refreshPage() {
        window.location.reload();
      })
      .then(navigate("/user"));
  }

  return (
    <div>
      <div>
        <h6>Current stats:</h6>
        <div>
          {typeof itemToUpdate === "string" ? (
            itemToUpdate
          ) : (
            <Image src={itemToUpdate.image} alt={itemToUpdate.name} />
          )}
        </div>
      </div>
      <h1>Update clothing!</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name of ur fab clothes"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <label>category:</label>
        <input
          type="text"
          name="category"
          placeholder="category"
          value={formData.category}
          onChange={handleChange}
        />
        <br />
        <label>Color:</label>
        <input
          type="text"
          name="color"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        />
        <br />
        <label>Last Worn:</label>
        <input
          type="number"
          name="last_worn_date"
          placeholder="last worn: YYYYMMDD"
          value={formData.last_worn_date}
          onChange={handleNumberChange}
        />
        <br />
        <label>notes:</label>
        <textarea
          type="text"
          name="notes"
          placeholder="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {/* testing to see if i can separately update last_worn_date as a number
      (no) */}
      {/* <form>
        <label>Last Worn:</label>
        <input
          type="number"
          name="last_worn_date"
          placeholder="last worn: YYYYMMDD"
          value={formData.last_worn_date}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

const Image = styled.img`
  width: 200px;
`;

export default UpdateItem;
