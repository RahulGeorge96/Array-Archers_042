import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { useRef, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLoggedin } from "../redux/actions";

export const LoginPage = () => {
  let emailref = useRef("");
  let passwordref = useRef("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // ------------------------

  const handleClickGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      axios
        .get(
          "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
        )
        .then((res) => {
          let filterdata = Object.entries(res.data).filter(([key, e]) => {
            return data.user.email == e.emailID;
          });
          if (filterdata.length > 0) {
            localStorage.setItem("currloginuser", JSON.stringify(filterdata));
            alert("Login Sucess");
            dispatch(userLoggedin());
            navigate("/");
          } else {
            alert("Please Signup first");
            navigate("/signup");
          }
        });
    });
  };

  function handeSubmit(e) {
    e.preventDefault();
    axios
      .get(
        "https://bike-enthusiast-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
      )
      .then((res) => {
        let filterdata = Object.entries(res.data).filter(([key, e]) => {
          return (
            emailref.current.value == e.emailID &&
            passwordref.current.value == e.password
          );
        });
        if (filterdata.length > 0) {
          localStorage.setItem("currloginuser", JSON.stringify(filterdata));
          alert("Login Sucess");
          dispatch(userLoggedin());
          navigate("/");
        } else {
          alert("Please Signup first");
          navigate("/signup");
        }
      });
  }

  // --------------------------

  return (
    <div className="loginpagecom">
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form id="form" onSubmit={handeSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input ref={emailref} type="email" placeholder="Email" id="username" />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordref}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button id="loginbtnn">Log In</button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            fontSize: "14px",
          }}
        >
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
              style={{ color: "blue", cursor: "pointer" }}
            >
              register here
            </span>
          </p>
        </div>
        <div className="social">
          <div
            onClick={handleClickGoogle}
            style={{ cursor: "pointer" }}
            className="go"
          >
            <i className="fab fa-google" onClick={handleClickGoogle} /> Google
          </div>
          <div
            onClick={handleClickGoogle}
            style={{ cursor: "pointer" }}
            className="fb"
          >
            <i onClick={handleClickGoogle} className="fab fa-facebook" />{" "}
            Facebook
          </div>
        </div>
      </form>
    </div>
  );
};
