import { Link } from "react-router-dom";
import '../Links.css'
import '../App.css'

export default function Links() {
    return (
        <>
          <div className="links">
            <Link to='/quiz' id="link">See Quizzes</Link>
            {/* If it is a button , we can add onClick event and use navigate function for navigating the URL */}
            <Link to='/highscore' id="link">High Scores</Link>
          </div>
        </>
    )
}