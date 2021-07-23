import React from 'react';
import ReactDOM from 'react-dom';
import "./AppStyle.css";
function App() {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="content">
        <h1 className="login-heading">Login</h1>
        <p className="login-content">Get access to your Orders, Wishlist and Recommendations.</p>
        </div>
        <img src="./login-image.png" height="70.2%" width="100%"/>
      </div>
      
      <div className="login-right"></div>

    </div>
  );
}

export default App;
