import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import App from './App';
// import ImgGallary from './Components/ImgGallary';
// import CoursesApp from './CoursesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="overflow-x-hidden h-[100vh] w-[100vw] bg-gradient-to-r from-violet-300 to-fuchsia-200	">

    {/* component loader */}
    <div className='w-[90%] max-w-[1300px] m-auto '>
      <ToastContainer/>
      {/* <App></App> */}
      {/* <ImgGallary></ImgGallary> */}
      {/* {<CoursesApp/>} */}
   


    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
