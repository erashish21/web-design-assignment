import React, { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import SubmissionsTable from "./Components/SubmissionsTable";
import "./App.css";

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const addSubmission = (formData) => {
    setSubmissions((prevSubmissions) => [...prevSubmissions, formData]);
    setShowForm(false);
  };



  return (
    <div className="app-container">
      {showForm ? (
        <FeedbackForm addSubmission={addSubmission} />
      ) : (
        <SubmissionsTable submissions={submissions} />
      )}
    </div>
  );
};

export default App;
