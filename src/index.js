import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> react-router

// import App from './App';
// import ImgGallary from './Components/ImgGallary';
// import TestimoniaApp from './TestimoniaApp';
// import CoursesApp from './CoursesApp';
// import LessonThree from './LessonThree'
<<<<<<< HEAD
// import HomeWorkOne from './Components/HomeWorkOne';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    className="overflow-x-hidden h-[100vh] w-[100vw] bg-cyan-900"
  >
    {/* component loader */}
    <div className="w-[90%] max-w-[1300px] mx-auto ">
=======
// import HomeWorkOne from './Components/?HomeWorkOne';
import ReactRouter from "./ReactRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="overflow-x-hidden h-[100vh] w-[100vw] bg-gradient-to-r from-violet-300 to-fuchsia-200	">
    {/* component loader */}
    <div className="w-[90%] max-w-[1300px] m-auto ">
>>>>>>> react-router
      <ToastContainer />
      {/* <App></App> */}
      {/* <ImgGallary></ImgGallary> */}
      {/* <CoursesApp/> */}
      {/* {<TestimoniaApp/>} */}
      {/*<LessonThree/>*/}
      {/* <HomeWorkOne/> */}
<<<<<<< HEAD
=======
      {
        <BrowserRouter>
          <ReactRouter />
        </BrowserRouter>
      }
>>>>>>> react-router
    </div>
  </div>
);

reportWebVitals();