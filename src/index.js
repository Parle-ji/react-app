import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import ImgGallary from './Components/ImgGallary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="overflow-x-hidden h-[100vh] w-[100vw] bg-gradient-to-r from-violet-300 to-fuchsia-200	">

    {/* component loader */}
    <div className='w-[90%] max-w-[1300px] m-auto '>

      {/* <App></App> */}
      {/* <ImgGallary></ImgGallary> */}
      
   


    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
