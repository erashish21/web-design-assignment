import React from "react";
import "./SubmissionsTable.css";

const SubmissionsTable = ({ submissions }) => {
  return (
    <div className="container">
      <h2>Feedback Submissions</h2>
      <table>
        <thead>
          <tr>
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
          {submissions.map((submission, index) => (
            <tr key={index}>
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
  );
};

export default SubmissionsTable;
