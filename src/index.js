import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Components/Todo';
import TodoFunc from './Components/TodoFunc';
import Q2 from './hooks/Q2';
import Q1 from "./hooks/Q1";
import Q3 from "./hooks/Q3";
import Q4 from "./hooks/Q4";
import Q5 from "./hooks/Q5";
import Q6 from "./hooks/Q6/Q6"
import ItemList from "./hooks/Q7";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todo/> */}
    {/* <TodoFunc/> */}
    {/* <Q1/> */}
    {/* <Q2/> */}
    {/* <Q3/> */}
    {/* <Q4/> */}
    {/* <Q5/> */}
    {/* <Q6/> */}
    <ItemList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
