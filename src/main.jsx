import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import QuizPage from './components/QuizPage.jsx'
import App from './App.jsx'
import SignUp from "./components/SignUp.jsx";
import QuizQuestions from "./components/QuizQuestions.jsx";
import SignIn from "./components/SignIn.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: '/quiz',
//         element: <QuizPage />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='quiz' element={<QuizPage />} />
      <Route path="highScore" element={<App />}/>
      <Route path="signin" element={<SignIn />}/>
      <Route path='signup' element={<SignUp />} />
      <Route path='/quizzes/:categoryId' element={<QuizQuestions />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
