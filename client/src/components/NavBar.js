import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useState } from "react";

function NavBar({ setUser }) {
  // function handleLogOut() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then((r) => setUser(r));
  // }
  return (
    <div>
      {/* <Link to="/home">Home</Link> */}
      <Link to="/user">Wardrobe ||</Link>
      <Link to="/wishlist_item">Wishlist || </Link>
      <Link to="/donation_site"> Donate ||</Link>
      <Link to="/clothing_article">Add clothes</Link>
      {/* <button onClick={handleLogOut}>Logout</button> */}
    </div>
  );
}
export default NavBar;
