import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import { createUserProfile } from "../../utils/firebase/firebase.utils";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(new Date());

  const handleCreateProfile = () => {
    // Fields needed: email, name, dob, joinDate, exposedItemsList;
    const today = new Date();
    let currentDate = `${today.getMonth()}-${today.getDate()}-${today.getYear()}`;
    createUserProfile(name, dob, currentDate, []);
  };

  // safeguard: if user is logged in && already has a profile created -- redirect away from this page
  // could potentially use useEffect without a dependency array

  const navigate = useNavigate();

  return (
    <div className="bg-cblue">
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
              Name:
            </label>
            <input
              type="text"
              className="login__textBox"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label style={{ textAlign: "left", fontWeight: "bold" }}>
              Date of Birth:{" "}
            </label>
            <DatePicker onChange={setDob} value={dob} />
          </div>
          <button className="login__btn" onClick={handleCreateProfile}>
            Create Profile
          </button>

          <h3 className="text-green">
            If you'd just like to have a look around,
            {<Link to="/Dashboard"> Click Here </Link>}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
