// src/pages/AuthPage.tsx
import { useState, useEffect } from 'react';
import './AuthPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import LoginBtn from "../components/Login2";
import SignUpBtn from "../components/Signup2";
import svg1bubble from './images/svg1bubble.svg';
import svg2bubble from './images/svg2bubble.svg';
import svg3bubble from './images/svg3bubble.svg';
import svg4bubble from './images/svg4bubble.svg';
import { signUp, signIn } from '../services/authService';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthProvider';

const images = [svg1bubble, svg2bubble, svg3bubble, svg4bubble];

const generateSessionId = () => {
  // Simple random session ID generator
  return 'sess-' + Math.random().toString(36).substr(2, 9);
};

const AuthPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Retrieve login function from AuthProvider
  const [signUpMode, setSignUpMode] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const location = useLocation();
  // Sign up form states
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Sign in form states
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const toggleSignUpMode = () => {
    setSignUpMode(!signUpMode);
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    setSignUpMode(mode === 'signup');
  }, [location.search]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await signUp({
        email,
        first_name: firstName,
        last_name: lastName,
        password
      });
      setMessage(response.message);
      // Clear form fields
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setMessage('');
  
    try {
      const response = await signIn({
        email: signInEmail,
        password: signInPassword,
      });
  
      if (response.access_token) {
        const sessionId = generateSessionId();
        // Convert user_id to number
        const userId = response.user_id ? Number(response.user_id) : 0;
        console.log(`Session ID: ${sessionId}`); // Log session ID
        console.log(`User ID: ${userId}`); // Log user ID
        login(userId, sessionId); // Set user ID and session ID in AuthProvider
        navigate('/dashboard'); // Redirect to /chat route on successful sign-in
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage(error.message || 'An error occurred. Please try again.');
    }
  };
  return (
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
      <div
        className="background-image"
        style={{ background: `url(${images[currentImage]})` }}
      ></div>
      <div className="forms-container">
        <div className={`signin-signup ${signUpMode ? 'sign-up-mode' : ''}`}>
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">Sign in</h2>
            {message && <p className="message">{message}</p>}
            <div className="input-field">
             
              <input 
                type="email" 
                placeholder="Email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                required 
              />
            </div>
            <div className="input-field">
             
              <input 
                type="password" 
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                required 
              />
            </div>
            <LoginBtn onClick={handleSignIn} />
           
          </form>
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            {message && <p className="message">{message}</p>}
            <div className="input-field">
            
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
            
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
        
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <SignUpBtn onClick={handleSignUp} />
           
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <p className='content_head'>
              Don't have an account?
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src="" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <p className='content_head'>
              Already have an account?
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={toggleSignUpMode}>
              Sign in
            </button>
          </div>
          <img src="" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
