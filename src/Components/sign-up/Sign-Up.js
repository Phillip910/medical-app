import React, { useState } from "react";
import "./Sign-Up.css";
import { Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(""); // State for error messages

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
    
        // Password validation logic
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
    
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
    
        // Phone number validation logic
        const phoneRegex = /^\d{10}$/; // Regular expression for exactly 10 digits
        if (!phoneRegex.test(phone)) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }
    
        // If validation passes, clear the error and proceed
        setError("");
        console.log("Form submitted successfully!");
        // Add logic to send data to the server here
    };
    return (
        <div className="container" style={{ marginTop: "5%" }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: "left" }}>
                    Already a member? <span><a href="../Login/Login.html" style={{ color: "#2190FF" }}> Login</a></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                className="form-control"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                required
                                className="form-control"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;