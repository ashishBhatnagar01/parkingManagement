import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import React from "react";
import { useState } from "react";
import axios from "axios";
// import '../components/LoginForm/LoginForm.css'
import swal from "sweetalert"
import './Registration.css';  
function RegistrationForm(){
  const [firstName,setfirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [mailId,setMailId]=useState("");
  const [password,setPassword]=useState("");
  const [cnfPassword,setCnfPassword]=useState("");
  async function submit(){
    const userData={
      userName: firstName+" "+lastName,
      mailId:mailId,
      password:password
    }
    console.log(userData);
    if(password!==cnfPassword){
      alert("Password and confirm password should be same");
    }
    else{
      const response= await axios.post('https://vehicle-parking-management.herokuapp.com/adduser',userData);
      console.log(response.data.message);
      if(response.data.message==='User already exist in database')
      {
        swal({
          title:`${response.data.message}`,
          icon: "error",
          button: "Aww yiss!",
        }).then(function(){
            window.location="/register"
        })
      }
      else{
        swal({
          title:`${response.data.message}`,
          icon: "success",
          button: "Aww yiss!",
        }).then(function(){
            window.location="/register"
        })
      }

    }
  }
    return(
        <Container fluid className="bg-dark">
          <div className="registration">
          <div className="registrationForm">
            <div className="icon">
              <i className="fa fa-user-circle regLogo" aria-hidden="true"></i>
            </div>
            <Container className="formContainer">
            <Form>
            <Row>
              <Col>
              <Form.Group className="" >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e)=>setfirstName(e.target.value)} />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className=" " >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mt-3 " >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={mailId} onChange={(e)=>setMailId(e.target.value)} />
            </Form.Group>
            <Row className="mt-3">
              <Col>
              <Form.Group className="" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className=" ">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter confirm Password" value={cnfPassword} onChange={(e)=>setCnfPassword(e.target.value)} />
              </Form.Group>
              </Col>
            </Row>
            <div style={{display:"flex",justifyContent:"center"}}>
             <Button   variant="dark" className="mt-4 p-2" style={{borderRadius:"10px"}} onClick={submit}>Sign Up</Button>
            </div>
            </Form>
            {/* <div className="sign-in" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
              or <br/>
          Sign Up With
        </div> */}
        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="line">
        </div>
        </div>
        
            </Container>
        <div className="social-icons">
        <i className="fab fa-google"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        </div>
        </div>
        </div>
        </Container>
        
      ); 
}
export default RegistrationForm;