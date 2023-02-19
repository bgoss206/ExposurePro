import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login/Login";
import Register from "./routes/Login/Register";

import "./App.css";
import Dashboard from "./routes/Dashboard/Dashboard";
import BrowseProducts from "./routes/Dashboard/BrowseProducts";
import ReportProducts from "./routes/Dashboard/ReportProducts";
import CreateEntry from "./routes/Dashboard/CreateEntry";
import ViewEntries from "./routes/Dashboard/ViewEntries";
import Settings from "./routes/Dashboard/Settings";
import Init from "./routes/Dashboard/Init";
import CreateProfile from "./routes/Login/CreateProfile";

function App() {
  return (
    <div className="Root">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/CreateProfile" element={<CreateProfile />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/init" element={<Init />} />

            <Route path="/BrowseProducts" element={<BrowseProducts />} />
            <Route path="/ReportProducts" element={<ReportProducts />} />
            <Route path="/CreateEntry" element={<CreateEntry />} />
            <Route path="/ViewEntries" element={<ViewEntries />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
