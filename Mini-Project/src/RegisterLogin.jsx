import React, { useState } from 'react';
import './RegisterLogin.css'; // Import the CSS file
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
 //import { Redirect } from 'react-router-dom';
// import {Navigate} from 'react-router-dom';
// import { useEffect } from 'react';



function RegisterLogin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [loginSuccessMessage, setLoginSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  // const history = useHistory();
  // const [redirect, setRedirect] = useState(false);

  const navigate=useNavigate();
  // useEffect(()=>{
  //   setIsLoggedIn(true);
  // },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Handle registration logic here
       console.log('Registering with:', username, email, password, mobile);
      try {
        const response = await axios.post("http://localhost:5000/employee", {
          username,
          email,
          password,
          mobile
        });
        console.log('Registration response:', response.data);
        // alert("Registered successfully");
        setErrorMessage('');
        setLoginSuccessMessage('Registered successfully');
       // navigate('/register');
      } catch (error) {
        console.error("Failed to register:", error);
        setLoginSuccessMessage('');
        if (error.response && error.response.status === 400 && error.response.data.message === 'Email is already registered') {
          setErrorMessage('Email is already registered');
      } else {
          setErrorMessage('Failed to register. Please try again later.');
      }
      
      
      }
     
    } else if (isUserLogin) {
      // Handle user login logic here
      try{
        await axios.post("http://localhost:5000/userLogin", {
          email,
          password,
        })
       
        .then(res => {
          // alert("Login Successful");
          // setIsLoggedIn(true); // Set login state to true
          //   setIsLoggedOut(false);
          setErrorMessage('');
          setLoginSuccessMessage('Login Successful');
            // navigate('/');
          } );
          setTimeout(() => {
            navigate('/AddListing');
          }, 1000);
          
      
        
      
        console.log("user login successful");
        // history.push('/');
        // setRedirect(true);
        
      }
      catch(e)
      {
        console.error("Failed to userLogin",e);
        setLoginSuccessMessage('');
       setErrorMessage('Failed to login. Please try again later.');
        // setErrorMessage('Password is incorrect');
      }
      console.log('User Logging in with:', email, password);
    } else {
      // Handle admin login logic here
      // try{
      //   await axios.post("http://localhost:5021/adminLogin",{
      //     email,
      //     password,
      //   });
      //   console.log("admin login successful");
      // }
      // catch(e)
      // {
      //   console.error("Failed to adminLogin",e);
      // }
      // console.log('Admin Logging in with:', email, password);
      console.log('Admin Logging in with:', email, password);
      if(email=="Novacapture@gmail.com" && password=="Novacapture")
      {
        // setIsLoggedIn(true); // Set login state to true
        // setIsLoggedOut(false); // Set logout state to false
        // setLoginSuccessMessage('Login Successful'); // Set success message
        // setTimeout(() => {
        //   setLoginSuccessMessage(''); // Clear success message after some time
        // }, 3000);
        // <p className="success-message">{loginSuccessMessage}</p>
        setErrorMessage('');
        setLoginSuccessMessage('Login Successful');
          // navigate('/');
        setTimeout(() => {
          navigate('/AddListing')
        }, 1000);
        
        
        // alert("Admin Login Succesful done");
        // return <Redirect to="/your-route" />;
        // <Link to="/"></Link>
      }
      else{
        // alert(" Admin login failed!! Email or password is incorrect");
        console.error("Failed to AdminLogin",e);
        setLoginSuccessMessage('');
        setErrorMessage('Failed to login. Please try again later.');
      }
    }
  };

  const handleRegisterSwitch = () => {
    setIsRegistering(true);
    setIsUserLogin(true); // Reset to user login mode when switching to register
  };

  const handleUserLoginSwitch = () => {
    setIsUserLogin(true);
    setIsRegistering(false); 
    setErrorMessage('');// Reset registering state when switching to user login   
  };

  const handleAdminLoginSwitch = () => {
    setIsUserLogin(false);
    setIsRegistering(false); // Reset registering state when switching to admin login
    setErrorMessage('');
  };
  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
    setIsLoggedOut(true); // Set logout state to true
  };

  return  (
    <div>
      {/* <Navbar/> */}
      <Navbar isLoggedIn={isLoggedIn} isLoggedOut={isLoggedOut} handleLogout={handleLogout} /> {/* Pass login/logout state and logout handler */}
    <div className="containerreg">
      <div className="form-wrapper">

        {isRegistering ? (
          <>
            <h2 className='loginh2'>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="form-group">
                <input
                  className='passreg'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}
              <div className="form-group">
  <input
    className='passreg'
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    minLength={8} // Set minimum length to 8 characters
    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" // Regex pattern to validate special character and capital letter
    title="Password must contain at least one special character, one capital letter, and be at least 8 characters long"
  />
  {password.length > 0 && (
    <small className="text-danger">
      {/* Display error message if password does not meet criteria */}
      {password.length < 8 && "Password must be at least 8 characters long. "}
      {!/(?=.*[A-Z])/.test(password) && "Password must contain at least one capital letter. "}
      {!/(?=.*[@$!%*?&])/.test(password) && "Password must contain at least one special character. "}
    </small>
  )}
</div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              {loginSuccessMessage && <p className="success-message">{loginSuccessMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="form-group loginbutton">
                Register
              </button>
            </form>
            <p className="form-group">
              Already have an account? <button onClick={() => setIsRegistering(false)} className="link"><b>Login here</b></button>.
            </p>
          </>
        ) : (
          <>
            <h2 className='loginh2'>{isUserLogin ? 'User Login' : 'Admin Login'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                className='emailinput'
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                className='passinput'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loginSuccessMessage && <p className="success-message">{loginSuccessMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

              <button type="submit" className="form-group loginbutton">
                {isUserLogin ? 'Login' : 'Login'}
              </button>
            </form>
            
            <button className="switch-button" onClick={isUserLogin ? handleAdminLoginSwitch : handleUserLoginSwitch}>
              {isUserLogin ? 'Switch to Admin Login' : 'Switch to User Login'}
            </button>
            <p className="form-group">
              Don't have an account ? <button onClick={handleRegisterSwitch} className="link"><b>Register here</b></button>.
            </p>
          
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default RegisterLogin;
