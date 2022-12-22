import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setUser, setRefresh, refresh }) {
  // function handleLogOut() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then((r) => setUser(r));
  // }
  return (
    <div className="navbar">
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/user">
        Wardrobe
      </Link>
      <Link className="button" to="/wishlist_item">
        Wishlist
      </Link>
      <Link className="button" to="/donation_site">
        {" "}
        Donate
      </Link>
      <Link className="button" to="/to_be_donated">
        To Be Donated
      </Link>
      <Link className="button" to="/sparks_no_joy_sadge">
        Sparks No Joy
      </Link>
      <Link className="button" to="/clothing_article">
        Add Clothes
      </Link>
      <Link className="button" to="/outfits">
        Outfits
      </Link>

      {/* <button onClick={handleLogOut}>Logout</button> */}
    </div>
  );
}
export default NavBar;
