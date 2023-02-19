import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login/Login";
import Register from "./routes/Login/Register";
import ToDoListHome from "./routes/ToDoListHome/to-do-list-home.component";

import "./App.css";
import Dashboard from "./routes/Dashboard/Dashboard";
import BrowseProducts from "./routes/Dashboard/BrowseProducts";
import ReportProducts from "./routes/Dashboard/ReportProducts";
import CreateEntry from "./routes/Dashboard/CreateEntry";
import PersonalDetails from "./routes/Dashboard/PersonalDetails";
import ViewEntries from "./routes/Dashboard/ViewEntries";
import Settings from "./routes/Dashboard/Settings";
import Init from "./routes/Dashboard/Init";

function App() {
  return (
    <div className="Root">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route exact path="/home" element={<ToDoListHome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/init" element={<Init />} />
            <Route path="/BrowseProducts" element={<BrowseProducts />} />
            <Route path="/ReportProducts" element={<ReportProducts />} />
            <Route path="/CreateEntry" element={<CreateEntry />} />
            <Route path="/PersonalDetails" element={<PersonalDetails />} />
            <Route path="/ViewEntries" element={<ViewEntries />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
