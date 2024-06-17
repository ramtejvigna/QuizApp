import React from "react";
import "./QuizPage.css";
import { Link } from "react-router-dom";

function CategoryItem({ category, name }) {
  return (
    <>
      <div className="category">
        <div>
        <Link to={`/quizzes/${category}`}>
          <button>
              <h2>{name}</h2>    
          </button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default CategoryItem;