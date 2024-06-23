import './App.css'
import { Routes, Route } from 'react-router-dom'
import QuizPage from './components/QuizPage'
import HighScore from './components/HighScore'
import Physics from './components/Categories/Physics'
import Maths from './components/Categories/Maths'
import Chemistry from './components/Categories/Chemistry'
import Computer from './components/Categories/Computer'
import Home from './components/Home'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='quizzes' element={<QuizPage />} />
          <Route path='/quizzes/physics' element={<Physics />}></Route>
          <Route path='/quizzes/maths' element={<Maths />}></Route>
          <Route path='/quizzes/chemistry' element={<Chemistry />}></Route>
          <Route path='/quizzes/computer' element={<Computer />}></Route>
          <Route path='/highscore' element={<HighScore />}/>
        </Routes>
    </>
  )
}

export default App
