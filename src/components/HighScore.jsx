import React from "react";
import "../Links.css"; // Ensure you import the CSS file for the styles

export default function HighScore({ data }) {
  console.log("HighScore data prop:", data); // Add this line to debug

  return (
    <>
      <div className="high-score-table">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
