// src/components/Auth.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log("User signed up:", email);
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    const handleLogin = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log("User logged in:", email);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Auth;
