import React from "react";

function Register() {
  return (
    <div className="register">
      <h1>Register</h1>

      <div className="login__container">
        <div>
          <label style={{ textAlign: "left", fontWeight: "bold" }}>
            E-mail Address:{" "}
          </label>
          <input
            type="text"
            className="login__textBox"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value.toLowerCase())}
            placeholder="E-mail Address"
            required
          />
        </div>
        <div>
          <label style={{ textAlign: "left", fontWeight: "bold" }}>
            Password:{" "}
          </label>
          <input
            type="text"
            className="login__textBox"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button className="login__btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
