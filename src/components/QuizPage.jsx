import "./QuizPage.css";
import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function QuizPage() {
  // useState hook for assigning the categories which we got from the API URL
  const [categories, setCategories] = useState([]);

  // The useEffect hook is used to perform side effects in functional components.
  // The effect runs after every render if the dependencies have changed.
  useEffect(() => {
    async function fetchCategory() {
      const url = "https://opentdb.com/api_category.php";
      let data = await fetch(url);
      let parseData = await data.json();
      setCategories(parseData.trivia_categories);
    }
    fetchCategory();
  }, []); // An empty array [] means the effect runs only once after the initial render
  return (
    <>
        <div className="container">
          <div className="title">
            <h2>Select Categories</h2>
          </div>
          <div className="category-wrapper">
            {/* Using map() method for iterating through the categories present. */}
            {categories.map((e) => {
              return (
                <div key={e.id}>
                  <CategoryItem name={e.name} /> {/* We send the 'name' as a prop to CategoryItem component */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="go-back">
          <button className=" transition-none hover:border-none">
            <Link to="/">
              <h2>Go Back</h2>
            </Link>
          </button>
        </div>
    </>
  );
}
