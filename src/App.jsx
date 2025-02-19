import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleEmailChange = (e)=> {
    const email = e.target.value;
    setEmail(email);

    if(!validateEmail(email)) {
      setEmailError("Invalid Email format")
    }else {
      setEmailError("")
    }
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    
    if(password.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
    }else{
      setPasswordError("")
    }
  }

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    if(password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
    }else{
      setConfirmPasswordError("")
    }
  }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password && confirmPassword && !emailError && !passwordError && !confirmPasswordError) {
      alert("Form submitted successfully")
    }else{
      alert("Can't submit the form")
    }
    
    console.log({
      email: email,
      password: password,
    })
  }

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label htmlFor="email">Email: </label><br />
          <input className={emailError ? "input-error" : "input-success"} onChange={handleEmailChange} value={email} type="email" id="email" name="email" />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className='input'>
          <label htmlFor="password">Password: </label><br />
          <input className={passwordError ? "input-error" : "input-success"} onChange={handlePasswordChange} value={password} type="password" id="password" name="password" />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className='input'>
          <label htmlFor="CondirmPassword" >Confirm Password: </label><br />
          <input className={confirmPasswordError ? "input-error" : "input-success"} onChange={handleConfirmPasswordChange} value={confirmPassword} type="password" id="CondirmPassword" name="confirmPassword" />
          {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
        </div>
        <button onClick={handleSubmit}>Sig Up</button>
      </form>
    </div>
  )
}

export default App
