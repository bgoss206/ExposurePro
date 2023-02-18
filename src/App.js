import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login/Login";
import ToDoListHome from "./routes/ToDoListHome/to-do-list-home.component";

import "./App.css";
import Dashboard from "./routes/Dashboard/Dashboard";

function App() {
  return (
    <div className="Root">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={<ToDoListHome />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
