import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { Switch } from "react-dom";
import "./App.css";
// import styled from "styled-components";
import HomePage from "./components/HomePage";
import Wardrobe from "./components/Wardrobe";
import Wishlist from "./components/Wishlist";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Donate from "./components/Donate";
import ClothingArticle from "./components/ClothingArticle";
import Search from "./components/Search";
import ClothingForm from "./components/ClothingForm";
import UpdateItem from "./components/UpdateItem";
import ToBeDonated from "./components/ToBeDonated";

function App() {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [wardrobe, setWardrobe] = useState([]);
  const [donationSites, setDonationSites] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [updateWornDateItem, setUpdateWornDateItem] = useState("");

  // lifts state from ClothingArticle component
  const [donate, setDonate] = useState("nothing! bahumbug!");

  // lifts state from ClothingArticle component
  const [itemToUpdate, setItemToUpdate] = useState("nothing!");

  //  Fetch requests //
  // GET data. pass to components.
  function fetchAllData() {
    fetch("/clothing_articles")
      .then((r) => r.json())
      .then((data) => setWardrobe(data));
    // .then(() => console.log("wardrobe added!", wardrobe));
    fetch("/wishlist_items")
      .then((r) => r.json())
      .then((data) => setWishlist(data));
    // .then(console.log("wishlist added!", wishlist));

    fetch("/donation_sites")
      .then((r) => r.json())
      .then((data) => setDonationSites(data));
  }

  // alert re: finished populating data
  function cumAndDone() {
    alert("done populating data!");
  }

  // adding items
  function addItem(newItem) {
    const newWardrobeArray = [...wardrobe, newItem];
    setWardrobe(newWardrobeArray);
  }

  // handle delete of item (not donating)
  function deleteItem(id) {
    fetch(`/clothing_articles/${id}`, {
      method: "DELETE",
    }).then(() => fetchAllData());
  }

  // update last worn button in component, ClothingArticle.js
  function updateLastWorn(last_worn_date, clothesObject) {
    console.log(last_worn_date);
    clothesObject.last_worn_date = last_worn_date;
    fetch(`/clothing_articles/${clothesObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: JSON.stringify(clothesObject),
    }).then(() => fetchAllData());
  }

  // update Date worn on item
  function handleDateUpdateItem(updated) {
    const updatedItem = wardrobe.map((item) =>
      item.id === updated.id ? updated : item
    );
    return updatedItem;
  }

  // create the relationship with clothing x donation site, removes user_id: PART 2
  function handleUpdatedItem(updated) {
    const updatedItem = wardrobe.map((item) =>
      item.id === updated.id ? updated : item
    );
    return updatedItem;
  }

  // create the relationship with clothing x donation site, removes user_id: PART 1
  function makeDonation(donate, siteId) {
    // console.log(donate.id);
    donate.donation_site_id = siteId;
    donate.user_id = 0;
    // update the clothing item's donation_site_id via PATCH
    // !!!!!! BREAKING at the .then//
    fetch(`/clothing_articles/${donate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(donate),
    }).then(() => fetchAllData());
    // .then((r) => r.json())
    // .then((data) => handleUpdatedItem(data));
    // deleting the clothing item's user_id is done on the back-end
    // update wardrobe to show change in user's wardrobe, i.e. setWardrobe()
  }

  useEffect(() => {
    // GET that keeps user logged in
    fetch("/me").then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => setUser(user))
          .then(fetchAllData);
      }
    });
    // // GET wishlist items. pass to component.
  }, []);
  if (!user) {
    return (
      <div>
        <h1>The Lion, the Witch, and the better Wardrobe</h1>
        <h3>Login:</h3>
        <Login setUser={setUser} />
        <h6>or Signup:</h6>
        <Signup setUser={setUser} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>The Lion, the Witch, and the better Wardrobe</h1>
        <button onClick={() => setUser(null)}>Logout</button>
        <button
          onClick={() => {
            fetchAllData();
            cumAndDone();
          }}
        >
          Populate Data
        </button>
        {/* <Search /> */}
        <BrowserRouter>
          <NavBar setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/user"
              element={
                <Wardrobe
                  wardrobe={wardrobe}
                  setDonate={setDonate}
                  setWardrobe={setWardrobe}
                  donationSites={donationSites}
                  deleteItem={deleteItem}
                  updateLastWorn={updateLastWorn}
                  setItemToUpdate={setItemToUpdate}
                />
              }
            ></Route>
            <Route
              path="/wishlist_item"
              element={<Wishlist wishlist={wishlist} />}
            ></Route>
            <Route
              path="/donation_site"
              element={
                <Donate
                  donationSites={donationSites}
                  setDonate={setDonate}
                  donate={donate}
                  makeDonation={makeDonation}
                />
              }
            ></Route>
            <Route
              path="/clothing_article"
              element={
                <ClothingForm
                  user={user}
                  addItem={addItem}
                  setItemToUpdate={setItemToUpdate}
                />
              }
            ></Route>
            <Route
              path="/update"
              element={
                <UpdateItem
                  user={user}
                  addItem={addItem}
                  setItemToUpdate={setItemToUpdate}
                  itemToUpdate={itemToUpdate}
                />
              }
            ></Route>
            <Route
              path="/to_be_donated"
              element={
                <ToBeDonated
                  donate={donate}
                  wardrobe={wardrobe}
                  deleteItem={deleteItem}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
