import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
// import App from "./App";
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter> {/* Wrap your app here */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
