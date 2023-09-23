import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the Bootstrap CSS and JavaScript files
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducerFunction from './components/features/User' ;
import themReducerFunction from './components/features/Theme';


const store = configureStore({
  reducer : {
    user : userReducerFunction,
    theme : themReducerFunction
  }

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
