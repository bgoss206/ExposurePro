import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleCheck = () => {
    setChecked(!checked);
    togglePassword();
  };

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!registerEmail) {
      console.log("Enter email address!");
    }
    if (!registerPassword) {
      console.log("Enter password!");
    }
    if (registerEmail && registerPassword) {
      await registerWithEmailAndPassword(registerEmail, registerPassword).then(
        () => {
          navigate("/createProfile");
        }
      );
    }
  };

  return (
    <div className="h-screen bg-cblue">
      <h1 className="font-bold text-6xl pt-32 mb-10 text-cgreen">Register</h1>

      <div className="login__container">
        <div>
          <label className="font-bold text-cgrey">E-mail Address: </label>
          <input
            type="text"
            className="mb-2"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value.toLowerCase())}
            placeholder="E-mail Address"
            required
          />
        </div>
        <div>
          <label className="font-bold text-cgrey">Password: </label>
          <input
            type={passwordShown ? "text" : "password"}
            className="mb-5"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value.toLowerCase())}
            placeholder="password"
            required
          />
          <label>
            Show Password?
            <input type="checkbox" value={checked} onChange={handleCheck} />
          </label>
        </div>
        <button className="text-cblue rounded bg-cwhite shadow px-1" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
