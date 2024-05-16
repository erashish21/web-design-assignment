import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FeedbackForm from "./Components/FeedbackForm";
import SubmissionsTable from "./Components/SubmissionsTable";
import "./App.css";

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const savedSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(savedSubmissions);
  }, []);

  const addSubmission = (newSubmission) => {
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
  };

  return (
    <Router>
      <div className="">
        <h1>Aromatic Bar Feedback</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Feedback Form</Link>
            </li>
            <li>
              <Link to="/submissions">Submissions</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<FeedbackForm addSubmission={addSubmission} />}
          />
          <Route
            path="/submissions"
            element={<SubmissionsTable submissions={submissions} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
