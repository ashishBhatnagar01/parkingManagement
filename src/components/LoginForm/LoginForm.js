import "./LoginForm.css"
import { Container } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";


function googleSignIn(){
  window.location="http://localhost:4000/auth/google"
}


function changeIcon(){
  const PassBtn = document.querySelector('.toggler');
      const input = document.querySelector('.userPassword');
      input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
      PassBtn.classList.toggle('fa-eye-slash')
}


function LoginForm(){
  const[mailId,setMailId]=useState("");
  const[password,setPassword]=useState("");
  async function submit(){
    const userData={
      mailId:mailId,
      password:password
    }
    console.log(mailId,password);
    const response=await axios.post("http://localhost:4000/auth/signin",userData)
    if(response.data.token){
      let credentials=[response.data.token,response.data.userDetails.userName,response.data.userDetails.mailId]
      localStorage.setItem("userData",JSON.stringify(credentials))
    }
    // console.log(response.data.userDetails.userName);
      swal({
        title:`${response.data.message}`,
        icon:`${response.data.icon}`,
        button:"Okay!"
      }).then(()=>{
        window.location="http://localhost:3000"
      })
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
        <i className="fa fa-lock" aria-hidden="true"></i>
        </div>
        <div>
        <input type="password" className="userPassword" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
        <span style={{cursor:"pointer"}} className="toggler fa fa-eye" onClick={changeIcon}></span>
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
        <i className="fab fa-google" onClick={googleSignIn}></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </Container>
  ) 
}

export default LoginForm;