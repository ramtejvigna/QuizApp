import "./QuizPage.css";
import { Link, Outlet } from 'react-router-dom'

export default function QuizPage() {
  return (
    <>
      <h2>Select Categories</h2>
      <div className="categories">
        <div style={{ backgroundColor: "pink", color: "black" }}>
          <Link to="physics">
            <h2>Physics</h2>
          </Link>
        </div>
        <div>
          <Link to="chemistry">
            <h2>Chemistry</h2>
          </Link>
        </div>
        <div>
          <Link to="maths">
            <h2>Maths</h2>
          </Link>
        </div>
        <div>
          <Link to="computer">
            <h2>Computer</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
