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
import { differenceInCalendarMonths } from "date-fns";
import SparksNoJoy from "./components/SparksNoJoy";
import Outfits from "./components/Outfits";
import Settings from "./components/Settings";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [wardrobe, setWardrobe] = useState([]);
  const [donationSites, setDonationSites] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [updateWornDateItem, setUpdateWornDateItem] = useState("");
  const [timeInterval, setTimeInterval] = useState(3);

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
    // console.log(last_worn_date);
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

  // update joy time in settings. related to intervalTime state.
  function updateJoyTime(intervalTime) {
    console.log("ERica");
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ joy_time: intervalTime }),
    });
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
  function makeDonation(donate, siteId, siteName) {
    // console.log(donate.id);
    donate.donation_site_id = siteId;
    donate.notes = `Donate to: ${siteName}!`;
    // update the clothing item's donation_site_id via PATCH
    fetch(`/clothing_articles/${donate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(donate),
    })
      .then(() => fetchAllData())
      .then(alert("Set aside to be donated!"));
  }

  // Take back function
  function takeBackItem(clothes) {
    // console.log(clothes.id);
    clothes.donation_site_id = 1;
    clothes.notes = `No longer donating!`;
    // update the clothing item's donation_site_id via PATCH
    fetch(`/clothing_articles/${clothes.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(clothes),
    })
      .then(() => fetchAllData())
      .then(alert("Took back!"));
  }

  // logout function
  function logout() {
    console.log("loggin out...");
    fetch("/logout", {
      method: "DELETE",
    })
      .then(navigate("/"))
      .then(window.location.reload());
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

  // ! run scan for last_worn_date
  // const result = differenceInCalendarMonths(
  //   new Date(),
  //   format.last_worn_date()
  // );

  // function scanDateWornDaily() {
  //   const currentTime = new Date().getTime(); //current unix timestamp
  //   const execTime = new Date().setHours(20, 0, 0, 0); //API call time = today at 20:00
  //   let timeLeft;
  //   if (currentTime < execTime) {
  //     //it's currently earlier than 20:00
  //     timeLeft = execTime - currentTime;
  //   } else {
  //     //it's currently later than 20:00, schedule for tomorrow at 20:00
  //     timeLeft = execTime + 86400000 - currentTime;
  //   }
  //   setTimeout(function () {
  //     setInterval(function () {
  //       let currentDate = new Date();
  //       let currentMonth = currentDate.getMonth();
  //       let currentYear = currentDate.getFullYear();
  //       let currentDay = currentDate.getDate();
  //       let toDonateArray = [];

  //       //code to check date

  //       wardrobe.forEach((item) => {
  //         let yearOld = item.last_worn_date.substring(0, 3);
  //         console.log(yearOld);
  //         let monthOld = item.last_worn_date.substring(4, 6);
  //         console.log(monthOld);
  //         // YYYY/MM/DD
  //         // 0123456789
  //         let dayOld = item.last_worn_date.substring(8, 10);
  //         console.log(dayOld);
  //         debugger;
  //         const result = differenceInCalendarMonths(
  //           // now
  //           new Date(currentYear, currentMonth, currentDay),
  //           //then
  //           new Date(yearOld, monthOld, dayOld)
  //         );

  //         if (result > 3) {
  //           toDonateArray.push(item);
  //           console.log(toDonateArray);
  //         }
  //       });
  //     }, 86400000); //repeat every 24h
  //   }, timeLeft); //wait until 20:00 as calculated above
  // }

  // ! test to run scan with button
  const [sparksNoJoyItems, setSparksNoJoyItems] = useState([]);
  function runScanTest() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let currentDay = currentDate.getDate();
    let toDonateArray = [];
    console.log("wardrobe app:", wardrobe);
    wardrobe.forEach((item) => {
      // console.log(item.last_date_worn);
      let stringDate = item.last_worn_date.toString();
      console.log(stringDate);
      let yearOld = stringDate.substring(0, 4);
      console.log(yearOld);
      let monthOld = stringDate.substring(4, 6);
      console.log(monthOld);
      // YYYY/MM/DD
      // 0123456789
      let dayOld = stringDate.substring(6, 8);
      console.log(dayOld);
      // debugger;
      const result = differenceInCalendarMonths(
        // now
        new Date(currentYear, currentMonth, currentDay),
        //then
        new Date(yearOld, monthOld, dayOld)
      );
      console.log("differenceInCalendarMonths:", result);
      // debugger;
      console.log("ericaaaaa", result + 1);
      if (result + 1 >= timeInterval) {
        toDonateArray.push(item);
        // console.log(toDonateArray);
        // debugger;
      }
    });
    console.log(toDonateArray);
    setSparksNoJoyItems(toDonateArray);
  }

  //toggle signup page
  const [showResults, setShowResults] = useState(false);

  if (!user) {
    return (
      <div>
        <h1>The Lion, the Witch, and the Better Wardrobe</h1>
        <img
          className="login-page-image"
          src="https://www.apetogentleman.com/wp-content/uploads/2020/04/minimalist-wardrobe.jpg"
          alt="clothes"
        />
        <div className="login-container">
          <h3>Login:</h3>
          <Login setUser={setUser} />
          <h6 onClick={() => setShowResults(!showResults)}>or Signup:</h6>
          {showResults ? <Signup setUser={setUser} /> : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>The Lion, the Witch, and the better Wardrobe</h1>
        <div className="navbar">
          <button className="button" onClick={() => logout()}>
            Logout
          </button>
          <button
            className="button"
            onClick={() => {
              fetchAllData();
              cumAndDone();
            }}
          >
            Populate Data
          </button>
          <button className="button" onClick={() => runScanTest()}>
            Run Date Scan
          </button>
          <button className="button" onClick={() => navigate("/settings")}>
            Settings
          </button>
        </div>
        {/* <Search /> */}
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
                runScanTest={runScanTest}
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
                takeBackItem={takeBackItem}
              />
            }
          ></Route>
          <Route
            path="/sparks_no_joy_sadge"
            element={
              <SparksNoJoy
                clothes={sparksNoJoyItems}
                setDonate={setDonate}
                setWardrobe={setWardrobe}
                deleteItem={deleteItem}
                updateLastWorn={updateLastWorn}
                setItemToUpdate={setItemToUpdate}
                // setSparksNoJoyItems={setSparksNoJoyItems}
              />
            }
          ></Route>
          <Route path="/outfits" element={<Outfits />}></Route>
          <Route
            path="/settings"
            element={
              <Settings
                timeInterval={timeInterval}
                setTimeInterval={setTimeInterval}
                updateJoyTime={updateJoyTime}
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
