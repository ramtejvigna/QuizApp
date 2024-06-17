import './App.css'
import { Routes, Route } from 'react-router-dom'
import QuizPage from './components/QuizPage'
import HighScore from './components/HighScore'
import Home from './components/Home'
import CategoryItem from './components/CategoryItem'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='quizzes' element={<QuizPage />} />
          <Route path='/quizzes/physics' element={<CategoryItem />}></Route>
          <Route path='/quizzes/maths' element={<CategoryItem />}></Route>
          <Route path='/quizzes/chemistry' element={<CategoryItem />}></Route>
          <Route path='/quizzes/computer' element={<CategoryItem />}></Route>
          <Route path='/highscore' element={<HighScore />}/>
        </Routes>
    </>
  )
}

export default App
