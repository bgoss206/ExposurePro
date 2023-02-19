import React from "react";
import { useState } from "react";
import Papa from "papaparse";
import { setDataInBatches } from "../../utils/firebase/firebase.utils";

function Init() {
  const [file, setFile] = useState(null);

  const cleanEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
      let currentEntry = entries[i];
      let currentId = currentEntry.ProductId;
      delete currentEntry["PropertyId"];
      delete currentEntry[""];
      if (currentEntry.Variant == "") {
        currentEntry.Variant = "default";
      }
      entries[i] = currentEntry;
    }
    return entries;
  };

  const handleSubmit = () => {
    // Find file state
    // if file is not null, parse through
    // upload to firebase

    if (file) {
      // parse file using Papaparse
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          let entries = cleanEntries(results.data);
          setDataInBatches(entries.slice(0, 1000), 500);
        },
      });
    }
  };

  const changeFileHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeFileHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
      <button onClick={handleSubmit}>Initialize DB</button>
    </div>
  );
}

export default Init;
