import { useNavigate } from "react-router-dom"
import "./signupPage.css"
import  { useRef, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import axios from "axios";


export const SignupPage = ()=>{
  let navigate = useNavigate();
  let nameref = useRef("")
  let emailref = useRef("")
  let passwordref = useRef("")

    const handleClickGoogle =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            let userDetails = {
              username:data.user.displayName,
              emailID:data.user.email,
              cart:[]
            }
            axios.get("https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json")
            .then((res)=>{
              let filterdata = Object.entries(res.data).filter(([key, e])=>{
                return data.user.email == e.emailID
              })
              if(filterdata.length>0){
                alert("user already exist");
                navigate("/login");              
              }
              else{
                axios.post("https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",userDetails)
                .then((res)=>{
                  alert("signup successfully");
                  navigate("/login");
                })
                .catch((e)=>{
                  alert("sigin failed");
                })
              }
              
            })
        })
    }

    function handleSubmit(e){
      e.preventDefault()
      let userDetails = {
        username:nameref.current.value,
        emailID:emailref.current.value,
        password : passwordref.current.value,
        cart : []
      }
      const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).+$/;
      if (regex.test(passwordref.current.value)) {
        axios.get("https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json")
        .then((res)=>{
          let filterdata = Object.entries(res.data).filter(([key, e])=>{
            return emailref.current.value == e.emailID
          })
          if(filterdata.length>0){
            alert("user already exist");
            navigate("/login");              
          }
          else{
            axios.post("https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",userDetails)
            .then((res)=>{
              alert("signup successfully");
              navigate("/login");
            })
            .catch((e)=>{
              alert("sigin failed");
            })
          }
        })
      } else {
        alert("Password must contain at least one special,uppercase and lowercase letter.");
      }
    }


  return (
    <div className="loginpagecom">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Sign up Here</h3>
          <label htmlFor="name">Name</label>
          <input ref={nameref} type="text" placeholder="Name" id="name" required/>
          <label htmlFor="username">Username</label>
          <input ref={emailref} type="email" placeholder="Email" id="username" required/>
          <label htmlFor="password">Password</label>
          <input ref={passwordref} type="password" placeholder="Password" id="password" required minLength={8} />
          <button id="loginbtnn">Sign up</button>
          <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"15px", fontSize:"14px"}}>
            <p>Already have an account? <span style={{color:"blue", cursor:"pointer"}} onClick={()=>{navigate("/login")}}>login here</span></p>
          </div>
          <div className="social">
            <div style={{cursor:"pointer"}} onClick={handleClickGoogle} className="go"><i onClick={handleClickGoogle} className="fab fa-google" />Google</div>
            <div style={{cursor:"pointer"}} onClick={handleClickGoogle} className="fb"><i onClick={handleClickGoogle} className="fab fa-facebook" /> Facebook</div>
          </div>
        </form>
      </div>
  )

}