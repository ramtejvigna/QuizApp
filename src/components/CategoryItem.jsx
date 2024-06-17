import React from 'react'
import './QuizPage.css'
  
function CategoryItem(props) {
    
  return (
    <> 
        <div className="category">
          <div>
            <button>
                <h2>{props.name}</h2>
            </button>
          </div>
        </div>
    </>
  )
}

export default CategoryItem
