import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useState } from "react";

function NavBar({ setUser, setRefresh, refresh }) {
  // function handleLogOut() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then((r) => setUser(r));
  // }
  return (
    <div>
      {/* <Link to="/home">Home</Link> */}
      <Link to="/">Home ||</Link>
      <Link to="/user">Wardrobe ||</Link>
      <Link to="/wishlist_item">Wishlist || </Link>
      <Link to="/donation_site"> Donate ||</Link>
      <Link to="/to_be_donated">To Be Donated ||</Link>
      <Link to="/clothing_article">Add clothes</Link>
      {/* <button onClick={handleLogOut}>Logout</button> */}
    </div>
  );
}
export default NavBar;
