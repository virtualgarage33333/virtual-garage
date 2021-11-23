import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ApolloProvider, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Container } from "@material-ui/core";
import styled from "styled-components";

const Container1 = styled.div`
  margin: 30px;
`;

const Part = styled.div`
  margin: 25px;
`;

const Subpart = styled.div`
  margin: 20px;
`;
const Top = styled.div`
  margin: 20px;
`;

function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        city: formState.city,
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });

    console.log(mutationResponse);
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container1>
      <Link to="/login">← Go to Login</Link>
      <Top>
        <h2>Signup</h2>
      </Top>
      <Part>
        <form onSubmit={handleFormSubmit}>
          <Subpart>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                placeholder="Username"
                name="username"
                type="username"
                id="username"
                onChange={handleChange}
              />
            </div>
          </Subpart>

          <Subpart>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
          </Subpart>

          <Subpart>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
          </Subpart>

          <Subpart>
            <div>
              <label htmlFor="city">City:</label>
              <input
                placeholder="City"
                name="city"
                type="city"
                id="city"
                onChange={handleChange}
              />
            </div>
          </Subpart>

          <button type="submit">Submit</button>
        </form>
      </Part>
    </Container1>
  );
}

export default Signup;
