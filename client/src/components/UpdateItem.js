import React, { useState, useNavigate } from "react";
import styled from "styled-components";

function UpdateItem({ user, addItem, itemToUpdate }) {
  let currentItem = {
    id: itemToUpdate.id,
    user_id: itemToUpdate.user_id,
    donation_site_id: 1,
    name: itemToUpdate.name,
    image: itemToUpdate.image,
    category: itemToUpdate.category,
    color: itemToUpdate.color,
    last_worn_date: itemToUpdate.last_worn_date,
    notes: itemToUpdate.notes,
  };

  //   const populateItemDetails = () => {
  //     fetch(`/clothing_articles/{itemToUpdate.id}`)
  //       .then((r) => r.json())
  //       .then((data) => console.log("UpdateItem:", data));
  //   };

  const [formData, setFormData] = useState(currentItem);

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log("name:", name);
    // console.log("value:", value);
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch(`/clothing_articles/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>Add clothing!</h1>
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
          type="text"
          name="last_worn_date"
          placeholder="last worn: YYYYMMDD"
          value={formData.last_worn_date}
          onChange={handleChange}
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
    </div>
  );
}

export default UpdateItem;
