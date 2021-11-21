import "./LoginForm.css"
import FaEye, { FaEyeDropper, FaEyeSlash } from 'react-icons/fa'
import { Container } from "react-bootstrap";
import React from "react";
import { useState } from "react";
function LoginForm(){
  const[mailId,setMailId]=useState("");
  const[password,setPassword]=useState("");
  function submit(){
    console.log(mailId,password);
    setMailId("");
    setPassword("")
  }
  
  return(
    <Container fluid className="bg-dark w-100">
      <div className="login-form">
        <div className="icon">
        <i className="fas fa-user-circle logo"></i>  
        </div>
        <div className="inputFields">
        <div>
        <input type="email" className="userName" value={mailId} placeholder="Enter your email" onChange={(e)=>setMailId(e.target.value)}/>
        <i class="fa fa-lock" aria-hidden="true"></i>
        </div>
        <div>
        <input type="password" className="userPassword" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
        <FaEyeSlash style={{marginLeft:"-30px"}}/>
        </div>
        <div>
          <button className="submitBtn" type="submit" onClick={submit} >Log In</button>
        </div>
        <div className="sign-in">
          Sign Up With
        </div>
        <hr/>
        </div>
        <div className="social-icons">
        <i className="fab fa-google"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </Container>
  ) 
}

export default LoginForm;