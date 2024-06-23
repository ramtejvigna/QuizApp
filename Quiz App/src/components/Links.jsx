import { Link } from "react-router-dom";

export default function Links() {
    return (
        <div className="links">
          <Link to='/quizzes' id="link">See Quizzes</Link>
          {/* If it is a button , we can add onClick event and use navigate function for navigating the URL */}
          <Link to='/highscore' id="link">High Scores</Link>
        </div>
    )
}