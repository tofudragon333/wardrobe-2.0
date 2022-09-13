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
    <div>
      <div>{site.name}</div>
      <Details>Address:{site.address}</Details>
      <Details>Phone number: {site.number}</Details>
      <button onClick={handleDonateClick}>Donate!</button>
      <br />
    </div>
  );
}

const Details = styled.div`
  font-size: 10px;
`;

export default DonationSite;
