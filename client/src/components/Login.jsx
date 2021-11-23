import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
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

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Link to="/signup">← Go to Signup</Link>
      <Top>
        <h2>Login</h2>
      </Top>
      <Part>
        <form onSubmit={handleFormSubmit}>
          <Subpart>
            <div>
              <label htmlFor="email">Email address:</label>
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
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
          </Subpart>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Part>
    </Container1>
  );
}

export default Login;
