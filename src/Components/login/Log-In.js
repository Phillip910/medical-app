import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./LogIn.css"; // Importing the CSS styles for the LogIn component
import { useState } from "react"; // Importing the useState hook from React library

function LogIn() {
  const [email, setEmail] = useState(""); // State variable for email input
  const [password, setPassword] = useState(""); // State variable for password input

  return (
    <div className="login-page"> {/* Creating a div with class name 'login-page' */}
      <div className="login-container"> {/* Creating a div with class name 'login-container' */}
        <div className="login-header"> {/* Creating a div with class name 'login-header' */}
          <h1>Login</h1> {/* Header text for login page */}
        </div>
        <form> {/* Creating a form element */}
          <div className="form-group"> {/* Div for form group */}
            <label htmlFor="email">Email</label> {/* Label for email input */}
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /> {/* Email input field */}
          </div>
          <div className="form-group"> {/* Div for form group */}
            <label htmlFor="password">Password</label> {/* Label for password input */}
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" /> {/* Password input field */}
          </div>
          <button type="submit" className="btn btn-primary">Login</button> {/* Login button */}
        </form>
      </div>
    </div>
  );
}
<div className="container">
        {/* Div for login grid layout */}
        <div className="login-grid">
          {/* Div for login text */}
          <div className="login-text">
            <h2>Login</h2>
          </div>
          {/* Additional login text with a link to Sign Up page */}
          <div className="login-text">
            Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}> Sign Up Here</a></span>
          </div>
          <br />
          {/* Div for login form */}
          <div className="login-form">
            <form>
              {/* Form group for email input */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
              </div>
              {/* Form group for password input */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>
              {/* Button group for login and reset buttons */}
              <div className="btn-group"></div>
            </form>
          </div>
        </div>
</div>
export default LogIn; // Exporting the LogIn component to be used in other parts of the application