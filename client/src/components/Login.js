import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
  background-color: #303030;
  display: flex;
  justify-content: center;
`;

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    console.log(username, password);
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((userData) => setUser(userData));
    // this is working correctly/ is correctly sending to the backend
  }

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter Username/email here"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" enter password/here"
        />
        <button className="button"> Submit </button>
      </form>
    </Container>
  );
}
export default Login;
