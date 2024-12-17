import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
// import ReactRouter from "./ReactRouter";

// import App from './App';
// import ImgGallary from './Components/ImgGallary';
// import TestimoniaApp from './TestimoniaApp';
// import CoursesApp from './CoursesApp';
// import LessonThree from './LessonThree';
// import HomeWorkOne from './Components/HomeWorkOne';
// import RandomGifApp from "./Components/RandomGifApp";

import BlogsApp from "./BlogsApp";
import BlogsContextProvider from "./context/BlogsContext";
// import StudyNotionApp from "./pages/StudyNotionApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="overflow-x-hidden h-[100vh] w-[100vw] bg-gradient-to-r from-violet-300 to-fuchsia-200">
    {/* component loader */}
    <div className="w-[90%] max-w-[1300px] m-auto">
      <ToastContainer />
      {
        <BrowserRouter>
          {/* <ReactRouter /> */}
          {/* <StudyNotionApp/> */}
          <BlogsContextProvider>
            <BlogsApp />
          </BlogsContextProvider>
        </BrowserRouter>
      }
      {/* Uncomment components as needed */}
      {/* <App /> */}
      {/* <ImgGallary /> */}
      {/* <CoursesApp /> */}
      {/* {<TestimoniaApp />} */}
      {/* <LessonThree /> */}
      {/* <HomeWorkOne /> */}
      {/* <RandomGifApp/> */}
    </div>
  </div>
);

reportWebVitals();
