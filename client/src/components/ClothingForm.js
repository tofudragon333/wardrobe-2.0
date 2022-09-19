import React, { useState, useNavigate } from "react";
import styled from "styled-components";

function ClothingForm({ user, addItem }) {
  const newItem = {
    id: "",
    user_id: user.id,
    donation_site_id: 1,
    name: "",
    image: "",
    category: "",
    color: "",
    last_worn_date: 0,
    notes: "",
  };

  const [formData, setFormData] = useState(newItem);

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
    console.log(formData);
    fetch("/clothing_articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => addItem(data));
    setFormData(newItem);
  }

  return (
    <div className="form">
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
          type="number"
          name="last_worn_date"
          placeholder="last worn: YYYYMMDD"
          value={formData.last_worn_date}
          onChange={handleNumberChange}
        />
        <br />
        <label>Notes:</label>
        <textarea
          className="notes"
          type="text"
          name="notes"
          placeholder="notes - last worn date must be in YYYYMMDD"
          value={formData.notes}
          onChange={handleChange}
        />
        <br />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ClothingForm;
