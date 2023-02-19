import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { Link } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      if (!loginEmail) {
        console.log("Enter email address!");
      }
      if (!loginPassword) {
        console.log("Enter password!");
      }
      if (loginEmail && loginPassword) {
        await logInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
          navigate("/home");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="login">
        <h1>Login</h1>

        <div className="login__container">
          <div>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              E-mail Address:{" "}
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
            New Here? {<Link to="/Register"> Register Here Now! </Link>}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
