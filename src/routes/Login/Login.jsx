import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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
          navigate("/Dashboard");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="h-screen bg-cblue">
        <h1 className="font-bold text-6xl pt-32 mb-10 text-cgreen">Login</h1>

        <div className="login__container">
          <div>
            <label className="font-bold text-cgrey">E-mail Address: </label>
            <input
              type="text"
              className="mb-2"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value.toLowerCase())}
              placeholder="E-mail Address"
              required
            />
          </div>
          <div>
            <label className="font-bold text-cgrey">Password: </label>
            <input
              type="password"
              className="mb-5"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="text-cblue rounded bg-cwhite shadow px-1 mb-1" onClick={handleSignIn}>
            Login
          </button>

          <h3 className= "text-cgreen px-1">
            New Here? {<Link to="/Register"> Register Here Now! </Link>}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
