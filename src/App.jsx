import React from "react";
import HighScore from "./components/HighScore.jsx"; // Adjust the import path as needed

const highScoreData = [
  { username: "Alice", score: 1500 },
  { username: "Bob", score: 1400 },
  { username: "Charlie", score: 1300 },
  // Add more data as needed
];

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <h1 className="my-10">High Scores</h1>
      <HighScore data={highScoreData} />
    </div>
  );
}

export default App;
