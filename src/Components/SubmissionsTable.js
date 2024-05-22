import React, { useState, useEffect } from "react";
import "./SubmissionsTable.css";

const SubmissionsTable = ({ submissions }) => {
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);
  const [newSubmission, setNewSubmission] = useState({
    name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    restaurantCleanliness: "",
    overallExperience: "",
  });

  // Initialize filteredSubmissions when submissions prop changes
  useEffect(() => {
    if (submissions) {
      console.log("Submissions:", submissions);
      setFilteredSubmissions(submissions);
    }
  }, [submissions]);

  // Function to handle search
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = submissions.filter((submission) =>
      submission.name.toLowerCase().includes(term)
    );
    setFilteredSubmissions(filtered);
  };

  // Function to handle checkbox selection
  const handleCheckboxChange = (submission) => {
    const selectedIndex = selectedSubmissions.findIndex(
      (item) => item.name === submission.name
    );
    if (selectedIndex === -1) {
      setSelectedSubmissions([...selectedSubmissions, submission]);
    } else {
      const updatedSelectedSubmissions = [
        ...selectedSubmissions.slice(0, selectedIndex),
        ...selectedSubmissions.slice(selectedIndex + 1),
      ];
      setSelectedSubmissions(updatedSelectedSubmissions);
    }
  };

  // Function to add new submission
  // Function to add new submission
  const handleAddSubmission = () => {
    // Add the new submission to the filtered submissions
    const updatedSubmissions = [...filteredSubmissions, newSubmission];
    // Update the filtered submissions state
    setFilteredSubmissions(updatedSubmissions);
    // Clear the new submission form
    setNewSubmission({
      name: "",
      email: "",
      phone: "",
      serviceQuality: "",
      beverageQuality: "",
      restaurantCleanliness: "",
      overallExperience: "",
    });
  };

  // Function to delete selected submissions
  const handleDeleteSubmissions = () => {
    const updatedSubmissions = filteredSubmissions.filter(
      (submission) =>
        !selectedSubmissions.some((item) => item.name === submission.name)
    );
    setFilteredSubmissions(updatedSubmissions);
    setSelectedSubmissions([]);
  };

  // Function to refresh table
  const handleRefresh = () => {
    setFilteredSubmissions(submissions);
    setSearchTerm("");
    setSelectedSubmissions([]);
  };

  return (
    <div className="container">
      <div className="controls">
        <h2>Feedback Submissions</h2>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleAddSubmission}>Add New</button>
        <button onClick={handleDeleteSubmissions}>Delete Selected</button>
        <button onClick={handleRefresh}>Refresh</button>
        <span>Total Members: {filteredSubmissions.length}</span>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service Quality</th>
              <th>Beverage Quality</th>
              <th>Restaurant Cleanliness</th>
              <th>Overall Experience</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedSubmissions.some(
                      (item) => item.name === submission.name
                    )}
                    onChange={() => handleCheckboxChange(submission)}
                  />
                </td>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{submission.serviceQuality}</td>
                <td>{submission.beverageQuality}</td>
                <td>{submission.restaurantCleanliness}</td>
                <td>{submission.overallExperience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionsTable;
