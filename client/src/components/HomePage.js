import React from "react";

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Better Wardrobe!</h1>
      <h3>About the wardrobe:</h3>
      <h5>
        As my capstone project, I designed an app designed to help users
        organize their wardrobe and donate what they don't wear. The app is
        designed so that if clothes haven't been worn for more than 3 months, it
        might be time to think about whether it sparks joy for you!
      </h5>
      <h6>
        If the data doesn't populate at first, please click "Populate Data" at
        the top of the page. To scan for date last worn, press the labeled
        button. It is advised to do this right after pressing "Populate Data."
      </h6>
      <div className="homepage-pictures">
        <h5>The lion and the witch:</h5>
        <br />
        <img
          width="300"
          src="https://cdn.discordapp.com/attachments/938921870915407942/1017887128513937478/A5845B1A-9C5C-430D-B13B-DE7A69C39745.jpg"
          alt="dog "
        />

        <img
          width="300"
          src="https://cdn.discordapp.com/attachments/903681428708003880/1013503861694152786/6C26FB00-83E8-49D2-A3E7-34105B076495.jpg"
          alt="me"
        />
      </div>
    </div>
  );
}

export default HomePage;
