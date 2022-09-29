import React from "react";

function Settings({ timeInterval, setTimeInterval, updateJoyTime }) {
  function handleSubmit(e) {
    console.log("Submit ericaaaaa");
    e.preventDefault();
    updateJoyTime(timeInterval);
  }
  return (
    <div>
      <h1>Settings</h1>
      <h5>Current time between sparking joy: {timeInterval} months</h5>
      <br />
      <form onClick={handleSubmit}>
        <label>change time:</label>
        <input
          type="number"
          value={timeInterval}
          onChange={(e) => {
            setTimeInterval(e.target.value);
          }}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Settings;
