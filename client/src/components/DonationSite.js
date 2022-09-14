import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

function DonationSite({
  donationSites,
  setDonate,
  site,
  makeDonation,
  donate,
}) {
  // useEffect(() => {}, []);

  function handleDonateClick() {
    console.log("handleDonateClick:", donate, site.id);
    let siteId = site.id;
    let siteName = site.name;
    makeDonation(donate, siteId, siteName);
  }
  return (
    <div className="donation-site">
      <img
        width="300"
        src="https://images.squarespace-cdn.com/content/v1/528fdfe1e4b03e7a072777b2/1417800023394-3CVO487YAAYG38ZTDVNF/image-asset.png"
        alt="wardrobe"
      />
      <div className="donation-site-name">{site.name}</div>
      <br />
      <div>Address:{site.address}</div>
      <div>Phone number: {site.number}</div>
      <div>
        <button className="button" onClick={handleDonateClick}>
          Donate!
        </button>
      </div>
      <br />
    </div>
  );
}

const Details = styled.div`
  font-size: 10px;
`;

export default DonationSite;
