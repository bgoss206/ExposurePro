import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { Link } from "react-router-dom";

const Info = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Welcome to Exposure Pro!</h1>

        <h4>
          We are happy you're taking the first step in cataloging your exposure
          to various products known to cause harm to our core biologies.
        </h4>

        <br />

        <h2>
          Please take a moment to fill out the following information about
          yourself to create a user profile:
        </h2>

        <div>
          <div>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              E-mail Address:
            </label>
            <input
              type="text"
              className="login__textBox"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value.toLowerCase())}
              placeholder="E-mail Address"
              required
            />
          </div>
          <div>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Password:{" "}
            </label>
            <input
              type="password"
              className="login__textBox"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="login__btn" onClick={handleSignIn}>
            Login
          </button>

          <h3 className="text-green">
            If you'd just like to have a look around,
            {<Link to="/Home"> Click Here </Link>}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
