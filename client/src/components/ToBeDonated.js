import React from "react";
import ToBeDonatedItemCard from "./ToBeDonatedItemCard";

function ToBeDonated({ wardrobe, deleteItem, takeBackItem }) {
  const inQueue = wardrobe.map((item) => {
    if (item.donation_site_id !== 1) {
      return (
        <ToBeDonatedItemCard
          clothes={item}
          key={item.id}
          deleteItem={deleteItem}
          takeBackItem={takeBackItem}
        />
      );
    }
  });
  console.log(wardrobe);
  return (
    <div>
      <h1>To Be Donated</h1>
      {inQueue}
    </div>
  );
}

export default ToBeDonated;
