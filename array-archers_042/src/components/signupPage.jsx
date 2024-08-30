import { useNavigate } from "react-router-dom"
import "./signupPage.css"
import  { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup,} from "firebase/auth";
import axios from "axios";



export const SignupPage = ()=>{

  const [email,setemail] = useState('');
  const [username,setusername] = useState('');

    const handleClickGoogle =()=>{


      

        signInWithPopup(auth,provider).then((data)=>{

            setemail(data.user.email);
            setusername(data.user.displayName);

            let userDetails = {
              username:data.user.displayName,
              emailID:data.user.email
            }

            axios.post("https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",userDetails);
            
            // localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        // setValue(localStorage.getItem('email'))
    })

  let navigate = useNavigate();


  return (
    <div className="loginpagecom">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>

        <form>
          <h3>Sign up Here</h3>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" />
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button id="loginbtnn">Sign up</button>
          <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"15px", fontSize:"14px"}}>
            <p>Already have an account? <span style={{color:"blue", cursor:"pointer"}} onClick={()=>{navigate("/login")}}>login here</span></p>
          </div>
          <div className="social">
            <div style={{cursor:"pointer"}} onClick={handleClickGoogle} className="go"><i onClick={handleClickGoogle} className="fab fa-google" />Google</div>
            <div style={{cursor:"pointer"}} className="fb"><i className="fab fa-facebook" />  Github</div>
          </div>

        </form>
        
      </div>
  )

}