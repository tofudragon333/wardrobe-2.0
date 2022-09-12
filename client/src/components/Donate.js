import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DonationSite from "./DonationSite";

function Donate({ donationSites, setDonate, donate, makeDonation }) {
  // useEffect(() => {}, []);
  const [donationSiteFilter, setDonationSiteFilter] = useState("");
  // console.log(donate);
  return (
    <div>
      <h1>Donate</h1>
      <h5>It may spark no Joy for you... but perhaps will for someone else!</h5>
      <h6>To be donated...</h6>
      <div>
        {typeof donate === "string" ? (
          donate
        ) : (
          <Image src={donate.image} alt={donate.name} />
        )}
      </div>
      <h4>Filter donation sites by zipcode:</h4>
      <form>
        <input
          type="text"
          placeholder="zipcode"
          onChange={(e) => e.target.value}
        />
      </form>
      <h3>Available donation sites:</h3>
      {donationSites.map((site) => (
        <DonationSite
          site={site}
          setDonate={setDonate}
          makeDonation={makeDonation}
          key={site.id}
          donate={donate}
        />
      ))}
    </div>
  );
}

const Image = styled.img`
  width: 200px;
`;

export default Donate;
